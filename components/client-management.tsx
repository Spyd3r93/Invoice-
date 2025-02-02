"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar } from "./ui/avatar";
import { PlusCircle, Search, MoreHorizontal, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const clients = [
  {
    id: 1,
    name: "Acme Corp",
    contact: "John Doe",
    email: "john@acme.com",
    phone: "+1 234 567 890",
    totalBilled: 12500,
  },
  {
    id: 2,
    name: "Globex Inc",
    contact: "Jane Smith",
    email: "jane@globex.com",
    phone: "+1 234 567 891",
    totalBilled: 8750,
  },
  {
    id: 3,
    name: "Tech Solutions",
    contact: "Bob Johnson",
    email: "bob@techsolutions.com",
    phone: "+1 234 567 892",
    totalBilled: 15000,
  },
];

export function ClientManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-9" />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <Card key={client.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <span className="font-semibold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {client.contact}
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View Invoices</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                {client.email}
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                {client.phone}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">Total Billed</p>
              <p className="text-xl font-bold">
                ${client.totalBilled.toLocaleString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}