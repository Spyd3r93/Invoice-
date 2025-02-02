import { DashboardLayout } from "@/components/dashboard-layout";
import { Card } from "@/components/ui/card";
import { InvoiceList } from "@/components/invoice-list";
import { BarChart3, DollarSign, Users } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$4,200.00",
    icon: DollarSign,
    description: "Last 30 days",
  },
  {
    title: "Active Clients",
    value: "12",
    icon: Users,
    description: "+2 this month",
  },
  {
    title: "Pending Invoices",
    value: "8",
    icon: BarChart3,
    description: "$2,850.00 total",
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your business</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
          <InvoiceList />
        </div>
      </div>
    </DashboardLayout>
  );
}