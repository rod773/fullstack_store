"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={cn(
        "fixed right-4 top-4 z-50 size-10 rounded-full border border-border/40 bg-background/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-accent",
        className
      )}
    >
      {theme === "light" ? (
        <Moon className="size-5 text-foreground" />
      ) : (
        <Sun className="size-5 text-foreground" />
      )}
    </Button>
  );
}
