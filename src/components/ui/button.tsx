import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/**
 * Homeworks buttons are pills set in the condensed heading face, matching the
 * parent brand's button language. Sizes are larger than shadcn's defaults
 * because this is a marketing site with touch-first CTAs (44px minimum).
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-heading font-bold uppercase tracking-wide whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-out outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:scale-[0.96] disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary)_85%,white)]",
        red: "bg-brand-red text-white hover:bg-brand-red-deep",
        outline:
          "border-current/25 bg-transparent text-foreground hover:bg-foreground/5 aria-expanded:bg-foreground/5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary)_90%,var(--foreground))]",
        ghost:
          "hover:bg-foreground/5 aria-expanded:bg-foreground/5",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
        link: "font-sans font-medium normal-case tracking-normal text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-6 text-[0.95rem]",
        sm: "h-9 gap-1.5 px-4 text-sm",
        lg: "h-13 gap-2 px-8 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
