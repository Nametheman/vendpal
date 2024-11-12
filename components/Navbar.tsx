"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import grid from "@/assets/icons/grid_view.svg";
import tree from "@/assets/icons/account_tree.svg";
import room from "@/assets/icons/account_balance.svg";
import analytics from "@/assets/icons/monitoring.svg";
import chat from "@/assets/icons/chat.svg";
import bell from "@/assets/icons/notifications.svg";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "./Icon";
import IconWrapper from "./IconWrapper";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-screen h-[100px] flex items-center justify-between px-4 border-b bg-accent z-10">
      <div className="flex items-center gap-4 lg:gap-[3rem] xl:gap-[6rem]">
        <Image src={logo} alt="logo" className="w-[100px] lg:w-[150px]" />
        <NavTabs />{" "}
      </div>
      <div className="flex items-center gap-4">
        <IconWrapper>
          <Icon imgSrc={bell} />
        </IconWrapper>
        <IconWrapper>
          <Icon imgSrc={chat} className="w-[1.3rem]" />
        </IconWrapper>
        <div className="">
          <IconWrapper onClick={() => setOpen(true)}>
            <Menu />
          </IconWrapper>
        </div>
      </div>
      <MobileNavbar open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;

const NavTabs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pages = [
    { name: "Dashboard", icon: grid, href: "/" },
    { name: "Approval Workflow", icon: tree, href: "/approval-workflow" },
    { name: "Budget room", icon: room, href: "/budget-room" },
    { name: "Analytics", icon: analytics, href: "/analytics" },
  ];
  return (
    <Tabs
      defaultValue="account"
      className="hidden lg:inline-flex min-w-[400px]  bg-muted p-2 rounded-2xl"
    >
      <TabsList>
        {pages.map((page) => (
          <TabsTrigger
            key={page.name}
            value={page.href}
            className={cn(
              "lg:px-4 lg:py-3 rounded-xl flex items-center gap-2 bg-transparent",
              pathname.split("/")[1] === page.href.split("/")[1]
                ? "bg-accent"
                : ""
            )}
            onClick={() => {
              router.push(page.href);
            }}
          >
            <Icon imgSrc={page.icon} className="w-[1.5rem]" />
            <p className="font-medium text-primary">{page.name}</p>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
