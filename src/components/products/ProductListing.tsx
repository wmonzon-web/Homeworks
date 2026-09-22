import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cdnUrl } from "@/lib/image";
import type { Product } from "@/lib/data/types";
import { applyFilters, buildFilterGroups, parseFilters, serializeFilters, type ActiveFilters, type FilterGroup } from "@/components/products/filters";

interface Props { products: Product[] }

function Filters({ groups, active, onToggle, onClear }: { groups: FilterGroup[]; active: ActiveFilters; onToggle: (key: string, value: string) => void; onClear: () => void }) {
  const any = Object.values(active).some((v) => v.length);
  return (
    <div className="flex flex-col gap-6">
      {groups.map((g) => (
        <fieldset key={g.key} className="border-t border-black/10 pt-4">
          <legend className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-ink">{g.label}</legend>
          <ul className="mt-3 flex flex-col">
            {g.options.map((o) => {
              const checked = active[g.key]?.includes(o.value) ?? false;
              return (
                <li key={o.value}>
                  <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[0.95rem] text-body">
                    <input
                      type="checkbox"
                      className="size-4 accent-ink"
                      checked={checked}
                      onChange={() => onToggle(g.key, o.value)}
                    />
                    <span className="flex-1">{o.label}</span>
                    <span className="text-sm text-body/60 tabular-nums">{o.count}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      ))}
      {any && (
        <Button type="button" variant="outline" size="sm" onClick={onClear} className="self-start">
          <X aria-hidden="true" /> Clear filters
        </Button>
      )}
    </div>
  );
}

export default function ProductListing({ products }: Props) {
  const groups = useMemo(() => buildFilterGroups(products), [products]);
  // The page is static, so the first client render must match the unfiltered
  // HTML; URL filters are applied right after mount, then kept in sync.
  const [active, setActive] = useState<ActiveFilters>({});
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(parseFilters(window.location.search, groups));
    setHydrated(true);
  }, [groups]);

  useEffect(() => {
    if (!hydrated) return;
    const url = `${window.location.pathname}${serializeFilters(active)}`;
    if (url !== `${window.location.pathname}${window.location.search}`) history.replaceState(null, "", url);
  }, [active, hydrated]);

  const toggle = (key: string, value: string) =>
    setActive((prev) => {
      const current = prev[key] ?? [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      const copy = { ...prev, [key]: next };
      if (next.length === 0) delete copy[key];
      return copy;
    });
  const clear = () => setActive({});

  const visible = useMemo(() => applyFilters(products, active), [products, active]);
  const activeCount = Object.values(active).reduce((n, v) => n + v.length, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
      <aside className="hidden lg:block" aria-label="Filters">
        <Filters groups={groups} active={active} onToggle={toggle} onClear={clear} />
      </aside>

      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-body tabular-nums" aria-live="polite">
            {visible.length} of {products.length} products
          </p>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button type="button" variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal aria-hidden="true" />
                Filters{activeCount > 0 ? ` (${activeCount})` : ""}
              </Button>
            </SheetTrigger>
            <SheetContent open={open} side="right" className="w-[min(100vw,22rem)] overflow-y-auto px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <SheetTitle className="font-heading text-xl font-bold uppercase tracking-wide text-ink">Filters</SheetTitle>
              <SheetDescription className="sr-only">Narrow the product list</SheetDescription>
              <div className="mt-6">
                <Filters groups={groups} active={active} onToggle={toggle} onClear={clear} />
              </div>
              <Button type="button" size="lg" className="mt-8 w-full" onClick={() => setOpen(false)}>
                Show {visible.length} products
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {visible.length === 0 ? (
          <div className="mt-6 rounded-xl bg-cream p-8 text-center">
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-ink">Nothing matches those filters</p>
            <p className="mt-2 text-[0.95rem] text-body">Try removing one, or ask us; we can usually source what you're after.</p>
            <Button type="button" variant="outline" className="mt-5" onClick={clear}>Clear filters</Button>
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((p) => {
              const image = p.images[0];
              return (
                <li key={p.slug}>
                  <a
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col rounded-xl bg-white shadow-raised transition-[box-shadow,transform] duration-150 ease-out hover:shadow-raised-hover focus-visible:ring-3 focus-visible:ring-ink/20 focus-visible:outline-none active:scale-[0.96]"
                  >
                    <img
                      src={cdnUrl(image.src)}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full rounded-t-xl object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <span className="font-heading text-lg leading-tight font-bold uppercase tracking-wide text-ink">{p.name}</span>
                      {p.specs.length > 0 && (
                        <dl className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-body">
                          {p.specs.slice(0, 2).map((s) => (
                            <div key={s.key} className="flex gap-1">
                              <dt className="text-body/70">{s.key}:</dt>
                              <dd>{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
