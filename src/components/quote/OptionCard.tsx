import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  detail?: string;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
}

/** Selection feedback is a short spring on the check mark; the card itself stays put. */
export function OptionCard({ label, detail, selected, onSelect, multi = false }: Props) {
  const reduce = useReducedMotion();
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex min-h-14 w-full items-center gap-4 rounded-xl border-2 bg-white p-4 text-left transition-[border-color,background-color,transform] duration-150 ease-out focus-visible:ring-3 focus-visible:ring-ink/20 focus-visible:outline-none active:scale-[0.98]",
        selected ? "border-ink bg-cream" : "border-black/15 hover:border-black/35",
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center border-2 transition-colors duration-150",
          selected ? "border-ink bg-ink text-white" : "border-black/25",
          multi ? "rounded-md" : "rounded-full",
        )}
        aria-hidden="true"
      >
        {selected && (
          <motion.span
            initial={reduce ? false : { scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.25 }}
            className="flex"
          >
            <Check className="size-3.5" strokeWidth={3} />
          </motion.span>
        )}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-heading text-lg leading-tight font-bold uppercase tracking-wide text-ink">{label}</span>
        {detail && <span className="text-sm leading-snug text-body">{detail}</span>}
      </span>
    </button>
  );
}
