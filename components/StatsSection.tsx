import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollTitle } from "@/components/ScrollTitle";
import { cn } from "@/lib/utils";
import { Users, ShoppingBag, Package, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Active customers",
    value: "12,500+",
    description: "Growing community of shoppers",
    icon: Users,
  },
  {
    title: "Orders delivered",
    value: "98K+",
    description: "Smooth fulfillment worldwide",
    icon: ShoppingBag,
  },
  {
    title: "Products listed",
    value: "2,400+",
    description: "Curated catalog for every need",
    icon: Package,
  },
  {
    title: "Satisfaction rate",
    value: "99%",
    description: "Rated by verified buyers",
    icon: TrendingUp,
  },
];

export function StatsSection({ className }: { className?: string }) {
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
            By the numbers
          </span>
          <ScrollTitle>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted by{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                thousands
              </span>
            </h2>
          </ScrollTitle>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
            Real metrics from our platform. We grow with our customers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <CardDescription className="mt-1">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
