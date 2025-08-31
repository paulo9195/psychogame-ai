import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Zap, Target, Trophy, Brain } from "lucide-react"

interface BadgeItemProps {
  type: "streak" | "mastery" | "progress" | "achievement" | "expert" | "genius"
  title: string
  description?: string
  earned?: boolean
  progress?: number
  maxProgress?: number
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

const badgeIcons = {
  streak: Zap,
  mastery: Target,
  progress: Award,
  achievement: Trophy,
  expert: Star,
  genius: Brain
}

const badgeColors = {
  streak: "bg-gradient-accent text-accent-foreground",
  mastery: "bg-gradient-secondary text-secondary-foreground",
  progress: "bg-gradient-primary text-primary-foreground",
  achievement: "bg-accent text-accent-foreground",
  expert: "bg-primary text-primary-foreground",
  genius: "bg-gradient-hero text-primary-foreground"
}

const BadgeItem = React.forwardRef<HTMLDivElement, BadgeItemProps>(
  ({ type, title, description, earned = false, progress, maxProgress, size = "md", animated = false, ...props }, ref) => {
    const Icon = badgeIcons[type]
    const percentage = progress && maxProgress ? (progress / maxProgress) * 100 : 0
    
    const sizes = {
      sm: { container: "p-3", icon: "w-6 h-6", text: "text-sm" },
      md: { container: "p-4", icon: "w-8 h-8", text: "text-base" },
      lg: { container: "p-6", icon: "w-12 h-12", text: "text-lg" }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border transition-all duration-300",
          sizes[size].container,
          earned 
            ? "bg-gradient-card shadow-medium hover:shadow-strong" 
            : "bg-muted/50 border-dashed opacity-60",
          animated && earned && "animate-float",
          "hover:scale-105 cursor-pointer"
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div className={cn(
            "rounded-full p-2 shrink-0",
            earned ? badgeColors[type] : "bg-muted text-muted-foreground"
          )}>
            <Icon className={sizes[size].icon} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className={cn(
              "font-semibold truncate",
              sizes[size].text,
              earned ? "text-foreground" : "text-muted-foreground"
            )}>
              {title}
            </h4>
            {description && (
              <p className="text-sm text-muted-foreground truncate">
                {description}
              </p>
            )}
            
            {progress !== undefined && maxProgress !== undefined && !earned && (
              <div className="mt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{progress}</span>
                  <span>{maxProgress}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {earned && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs">
              Conquistado
            </Badge>
          </div>
        )}
      </div>
    )
  }
)

BadgeItem.displayName = "BadgeItem"

interface BadgeGridProps {
  badges: BadgeItemProps[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const BadgeGrid: React.FC<BadgeGridProps> = ({ badges, columns = 2, className }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {badges.map((badge, index) => (
        <BadgeItem key={index} {...badge} />
      ))}
    </div>
  )
}

export { BadgeItem, BadgeGrid }