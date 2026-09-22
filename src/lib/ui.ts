/** Shared class strings for native form controls so every form draws the same field. */
export const FIELD_CLASS =
  "h-12 w-full rounded-lg border border-input bg-white px-3.5 text-base text-ink shadow-[inset_0_1px_2px_rgb(0_0_0/0.04)] placeholder:text-body/55 transition-[border-color,box-shadow] duration-150 ease-out hover:border-black/35 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ink/15 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/15";

export const TEXTAREA_CLASS = `${FIELD_CLASS} h-auto min-h-32 py-3`;

export const LABEL_CLASS = "text-sm font-medium text-ink";
