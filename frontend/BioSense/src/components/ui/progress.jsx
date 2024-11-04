import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const colorMap = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500'
}

const Progress = React.forwardRef(({ className, value, indicatorColor, ...props }, ref) => (


  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-gray-700", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${colorMap[indicatorColor]} transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
