import PagesTab from "@/components/Budget Room/PagesTab";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <PagesTab />
      {children}
    </section>
  );
};

export default layout;
