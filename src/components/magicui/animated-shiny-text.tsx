import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
  shimmerColor?: string;
  duration?: string;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 180,
  shimmerColor,
  duration = "3s",
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          "--duration": duration,
        } as CSSProperties
      }
      className={cn(
        "relative max-w-fit font-medium text-neutral-700 dark:text-neutral-300",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-size:var(--shiny-width)_100%]",

        // Shine gradient - more prominent now
        shimmerColor 
          ? `bg-gradient-to-r from-transparent via-[${shimmerColor}] to-transparent`
          : "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
