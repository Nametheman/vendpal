import React from "react";
import AccountSetup from "@/components/Sidebar/AccountSetup";
import TeamSetup from "@/components/Sidebar/TeamSetup";
import SocialLinks from "@/components/Sidebar/SocialLinks";

const HomeComponent = () => {
  return (
    <div className="fixed w-full p-4">
      <AccountSetup />
      <TeamSetup />
      <SocialLinks />
    </div>
  );
};

export default HomeComponent;
