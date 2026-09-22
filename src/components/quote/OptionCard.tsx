import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  detail?: string;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
}

export function OptionCard({ label, detail, selected, onSelect, multi = false }: Props) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex min-h-14 w-full items-center gap-4 rounded-xl border-2 bg-white p-4 text-left transition-[border-color,background-color,transform] duration-150 ease-out focus-visible:ring-3 focus-visible:ring-ink/20 focus-visible:outline-none active:scale-[0.98]",
        selected ? "border-ink bg-cream" : "border-black/10 hover:border-black/25",
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-ink bg-ink text-white" : "border-black/20",
          multi ? "rounded-md" : "rounded-full",
        )}
        aria-hidden="true"
      >
        {selected && <Check className="size-3.5" strokeWidth={3} />}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-heading text-lg leading-tight font-bold uppercase tracking-wide text-ink">{label}</span>
        {detail && <span className="text-sm leading-snug text-body">{detail}</span>}
      </span>
    </button>
  );
}
