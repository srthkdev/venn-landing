import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

interface SectionProps {
  id?: string;
  title: ReactNode;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <ShimmerButton className="shadow-2xl px-4 py-1.5 text-sm">
              <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                {title}
              </span>
            </ShimmerButton>
          </div>
          {subtitle && (
            <p className="mt-6 text-3xl font-medium leading-8 sm:text-4xl">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16">{children}</div>
      </div>
    </section>
  );
}
