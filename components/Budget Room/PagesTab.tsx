"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const PagesTab = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pages = [
    { name: "Currency and Taxes", href: "/budget-room/currency-and-taxes" },
    { name: "Budget line", href: "/budget-room/budget-line" },
    { name: "Budget room centre", href: "/budget-room/budget-room-centre" },
    { name: "Budget control", href: "/budget-room/budget-control" },
  ];

  return (
    <div className="border-b px-4">
      <Tabs
        defaultValue="currency-and-taxes"
        className="max-w-screen overflow-x-scroll sm:min-w-[400px] p-0 bg-transparent"
      >
        <TabsList>
          {pages.map((page) => (
            <TabsTrigger
              key={page.name}
              value={page.href}
              className={cn(
                "px-4 py-4 flex rounded-none items-center gap-2 bg-transparent",
                pathname.includes(page.href)
                  ? "border-b-[3px] border-black"
                  : ""
              )}
              onClick={() => {
                router.push(page.href);
              }}
            >
              <p className="font-medium text-primary">{page.name}</p>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PagesTab;
