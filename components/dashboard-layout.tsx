"use client";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <DashboardSidebar />
      <div className="pl-64">
        <DashboardHeader />
        <main className="container py-8">{children}</main>
      </div>
    </div>
  );
}