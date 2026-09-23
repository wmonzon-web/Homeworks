import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";
import { NAV_LINKS, isActivePath } from "@/components/layout/nav";
import { cn } from "@/lib/utils";

interface Props {
  currentPath: string;
}

export default function MobileNav({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent open={open}
        side="right"
        showCloseButton={false}
        className="flex w-[min(100vw,22rem)] flex-col gap-0 px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center justify-between">
          <SheetTitle className="font-heading text-xl font-bold uppercase tracking-[0.08em] text-ink">
            {BUSINESS.name}
          </SheetTitle>
          <SheetClose
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </SheetClose>
        </div>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>

        <nav className="mt-8 flex flex-col" aria-label="Mobile">
          <a
            href="/"
            onClick={() => setOpen(false)}
            className={cn(
              "flex min-h-12 items-center border-b border-black/8 font-heading text-2xl font-bold uppercase tracking-wide transition-colors",
              isActivePath(currentPath, "/") ? "text-brand-red" : "text-ink hover:text-brand-red",
            )}
          >
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActivePath(currentPath, link.href) ? "page" : undefined}
              className={cn(
                "flex min-h-12 items-center border-b border-black/8 font-heading text-2xl font-bold uppercase tracking-wide transition-colors",
                isActivePath(currentPath, link.href)
                  ? "text-brand-red"
                  : "text-ink hover:text-brand-red",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Button asChild size="lg" className="w-full">
            <a href="/get-quote" onClick={() => setOpen(false)}>
              Get a quote
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            <a href={`tel:${BUSINESS.phone.e164}`}>
              <Phone aria-hidden="true" />
              {BUSINESS.phone.display}
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
