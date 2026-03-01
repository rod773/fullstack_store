import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  CreditCard,
  Mail,
  Cloud,
  Database,
  BarChart3,
  Shield,
} from "lucide-react";

const integrations = [
  {
    title: "Stripe",
    description:
      "Payments, subscriptions, and invoicing. Accept cards and global payment methods.",
    icon: CreditCard,
  },
  {
    title: "Resend",
    description:
      "Transactional and marketing emails. Reliable delivery and analytics.",
    icon: Mail,
  },
  {
    title: "Vercel",
    description:
      "Deploy and scale on the edge. Instant rollbacks and preview deployments.",
    icon: Cloud,
  },
  {
    title: "Database",
    description:
      "PostgreSQL, MySQL, or SQLite. Prisma or Drizzle for type-safe queries.",
    icon: Database,
  },
  {
    title: "Analytics",
    description:
      "Track conversions, funnels, and engagement. Privacy-friendly options.",
    icon: BarChart3,
  },
  {
    title: "Auth providers",
    description:
      "Google, GitHub, Discord. OAuth and magic links with NextAuth or similar.",
    icon: Shield,
  },
];

export function IntegrationsSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "border-t bg-background py-16 sm:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            Integrations
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Connect with your{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              favorite tools
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
            Payment, email, hosting, and auth—plug in what you need and ship
            faster.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <Card
                key={integration.title}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardHeader className="gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{integration.title}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
