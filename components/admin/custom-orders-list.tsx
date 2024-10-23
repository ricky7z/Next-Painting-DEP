"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// In a real app, this would come from your backend
const mockOrders = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    size: "Medium (24\" x 36\")",
    status: "pending",
    date: "2024-03-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    size: "Large (36\" x 48\")",
    status: "in_progress",
    date: "2024-03-19",
  },
];

export function CustomOrdersList() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.size}</TableCell>
              <TableCell>
                <Badge variant={order.status === "pending" ? "secondary" : "default"}>
                  {order.status === "pending" ? "Pending" : "In Progress"}
                </Badge>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Order Details</DialogTitle>
                      <DialogDescription>
                        Order from {order.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Contact Information</h4>
                        <p className="text-sm text-muted-foreground">
                          Email: {order.email}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Order Details</h4>
                        <p className="text-sm text-muted-foreground">
                          Size: {order.size}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}