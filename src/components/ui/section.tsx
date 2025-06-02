import { cn } from "@/lib/utils"
import type { SectionProps } from "@/types"

export function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("w-full py-8 md:py-16", className)}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  )
}
