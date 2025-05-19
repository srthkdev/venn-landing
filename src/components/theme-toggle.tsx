"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  // Don't show in production
  if (process.env.NODE_ENV === "production") return null;

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = () => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-1 left-1 z-50"
      onClick={handleClick}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
