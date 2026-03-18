import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:opacity-88 rounded-md",
        outline:
          "border border-border2 bg-bg3 text-white2 hover:border-border2 hover:text-white rounded-md",
        secondary:
          "bg-bg3 text-white2 border border-border2 hover:border-border2 hover:text-white rounded-md",
        ghost:
          "text-white2 hover:text-white transition-colors",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-md",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        lg: "h-11 px-6",
        icon: "size-10",
        "icon-xs": "size-6",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
