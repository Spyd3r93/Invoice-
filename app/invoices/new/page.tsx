"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { InvoiceForm } from "@/components/invoice-form";

export default function NewInvoicePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Create New Invoice</h1>
          <p className="text-muted-foreground">Fill in the details for your new invoice</p>
        </div>
        <InvoiceForm />
      </div>
    </DashboardLayout>
  );
}