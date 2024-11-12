import React from "react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import grid from "@/assets/icons/grid_view.svg";
import tree from "@/assets/icons/account_tree.svg";
import room from "@/assets/icons/account_balance.svg";
import analytics from "@/assets/icons/monitoring.svg";
import tune from "@/assets/icons/page_info.svg";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

type MobileNavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const pages = [
    { name: "Dashboard", icon: grid, href: "/" },
    { name: "Approval Workflow", icon: tree, href: "/approval-workflow" },
    { name: "Budget room", icon: room, href: "/budget-room" },
    { name: "Analytics", icon: analytics, href: "/analytics" },
    { name: "Settings", icon: tune, href: "/settings" },
  ];
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="p-0">
        <div className="py-4 flex flex-col mt-8 p-0">
          {pages.map((page) => (
            <div
              key={page.name}
              className={cn(
                "px-3 py-6 flex items-center gap-2 bg-transparent w-full border-b rounded-none",
                pathname.split("/")[1] === page.href.split("/")[1]
                  ? "bg-accent"
                  : ""
              )}
              onClick={() => {
                router.push(page.href);
                setOpen(false);
              }}
            >
              <Icon imgSrc={page.icon} className="w-[1.5rem]" />
              <p className="font-semibold">{page.name}</p>
            </div>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
