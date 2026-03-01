// components/hero.tsx
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-linear-to-b from-background/55 via-background/25 to-background/10 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
          New · Fullstack Store
        </span>

        <h1 className="mb-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Build your next{" "}
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            commerce experience
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
          A modern fullstack store starter with authentication, dashboard, and a
          beautiful UI powered by shadcn/ui.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Start shopping</Button>
          <Button variant="outline" size="lg">
            Browse categories
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          No credit card required · Ready in minutes
        </p>
      </div>
    </section>
  );
}
