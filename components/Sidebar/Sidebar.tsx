import React from "react";
import AccountSetup from "./AccountSetup";
import TeamSetup from "./TeamSetup";
import SocialLinks from "./SocialLinks";
import { Dot } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block fixed w-[350px] h-[calc(100vh-100px)] border-r py-4">
      <div className="px-8">
        <AccountSetup />
      </div>
      <div className="px-8">
        <TeamSetup />
      </div>
      <div className="px-8">
        <SocialLinks />
      </div>
      <div className="absolute border-t bottom-0 w-full h-[80px] flex items-center justify-center px-8 gap-1">
        <p className="text-sm font-medium">Terms of Service</p>
        <Dot />
        <p className="text-sm font-medium">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Sidebar;
