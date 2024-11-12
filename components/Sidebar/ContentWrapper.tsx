import { cn } from "@/lib/utils";
import React from "react";

const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("border p-4 rounded-2xl", className)}>{children}</div>
  );
};

export default ContentWrapper;
