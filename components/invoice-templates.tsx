"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FileText, Star, Copy, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const templates = [
  {
    id: 1,
    name: "Professional Services",
    description: "Clean and modern template for consulting and professional services",
    isDefault: true,
    preview: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Creative Agency",
    description: "Bold and creative template for design and marketing agencies",
    isDefault: false,
    preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Detailed template for product-based businesses",
    isDefault: false,
    preview: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=800&auto=format&fit=crop&q=60",
  },
];

export function InvoiceTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Invoice Templates</h2>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={template.preview}
                alt={template.name}
                className="object-cover w-full h-full"
              />
              {template.isDefault && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary">
                    <Star className="mr-1 h-3 w-3" />
                    Default
                  </Badge>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {template.description}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Use Template
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    {!template.isDefault && (
                      <DropdownMenuItem>Set as Default</DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}