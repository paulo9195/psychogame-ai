import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
  variant?: "default" | "success" | "accent" | "glow"
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  animated?: boolean
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max, variant = "default", size = "md", showLabel = false, animated = false, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))
    
    const variants = {
      default: "bg-primary",
      success: "bg-secondary",
      accent: "bg-accent",
      glow: "bg-primary progress-glow"
    }
    
    const sizes = {
      sm: "h-2",
      md: "h-3", 
      lg: "h-4"
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={cn(
          "w-full bg-muted rounded-full overflow-hidden",
          sizes[size]
        )}>
          <div
            className={cn(
              "h-full rounded-full transition-all duration-700 ease-out",
              variants[variant],
              animated && "animate-pulse-soft"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>{value}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    )
  }
)

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }