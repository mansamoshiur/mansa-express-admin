"use client";

import { cn } from "@/lib/utils";
import {
  ActivitySquare,
  Home,
  LayoutDashboard,
  LayoutList,
  LineChart,
  Package,
  Rainbow,
  Settings,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-violet-500",
  },
  {
    label: "Categories",
    icon: LayoutList,
    href: "/categories",
    color: "text-pink-700",
  },
  {
    label: "Color",
    icon: Rainbow,
    href: "/color",
    color: "text-orange-700",
  },
  {
    label: "Size",
    icon: ActivitySquare,
    href: "/size",
    color: "text-emerald-500",
  },
  {
    label: "Products",
    icon: Package,
    href: "/products",
    color: "text-green-700",
  },
  {
    label: "Orders",
    icon: ShoppingBag,
    href: "/orders",
    color: "text-purple-500",
  },
  {
    label: "Analytics",
    icon: LineChart,
    href: "/analytics",
    color: "text-blue-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-yellow-500",
  },
];

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-2">
            <Image alt="logo" src="/mansa_express.png" fill />
          </div>
          <h1 className="text-2xl font-bold">MansaExpress</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1 ">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
