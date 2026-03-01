import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollTitle } from "@/components/ScrollTitle";
import { cn } from "@/lib/utils";
import {
  Shield,
  LayoutDashboard,
  Palette,
  ShoppingCart,
  Zap,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Authentication",
    description:
      "Secure sign-in and sign-up with session management and protected routes.",
    icon: Shield,
  },
  {
    title: "Dashboard",
    description:
      "Admin dashboard to manage products, orders, and store analytics.",
    icon: LayoutDashboard,
  },
  {
    title: "shadcn/ui",
    description:
      "Beautiful, accessible components built with Radix and Tailwind.",
    icon: Palette,
  },
  {
    title: "Commerce ready",
    description:
      "Cart, checkout, and product catalog built for real storefronts.",
    icon: ShoppingCart,
  },
  {
    title: "Fast & modern",
    description:
      "Next.js App Router, React 19, and optimized for performance.",
    icon: Zap,
  },
  {
    title: "Secure by default",
    description:
      "Best practices for auth, validation, and data handling out of the box.",
    icon: Lock,
  },
];

export function FeaturesSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "border-t bg-background/35 py-16 backdrop-blur-sm sm:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            Features
          </span>
          <ScrollTitle>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need for{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                your store
              </span>
            </h2>
          </ScrollTitle>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
            A fullstack starter with auth, dashboard, and a polished UI—ready to
            customize and ship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardHeader className="gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
