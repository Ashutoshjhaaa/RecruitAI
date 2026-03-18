import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-md border border-border2 bg-bg4 px-3.5 py-2.5 text-sm text-white transition-colors outline-none placeholder:text-white3 focus:border-white3",
        className
      )}
      {...props}
    />
  )
}

export { Input }
