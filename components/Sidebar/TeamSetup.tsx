"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";
import upgrade from "@/assets/icons/upgrade.svg";
import dept from "@/assets/icons/source_environment.svg";
import units from "@/assets/icons/communities.svg";
import { Button } from "../ui/button";

const TeamSetup = () => {
  return (
    <ContentWrapper className="mt-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium">TEAMS</p>
        <p className="text-[0.55rem] font-medium bg-[#C5FCD6] text-primary p-1 rounded-md">
          Basic User
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={dept} alt="dept" className="w-[20px]" />
          <p className="text-xs text-secondary">Departments</p>
        </div>
        <p className="text-xs text-secondary">0</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={units} alt="units" className="w-[20px]" />
          <p className="text-xs text-secondary">Units</p>
        </div>
        <p className="text-xs text-secondary">0</p>
      </div>

      <Button variant={"outline"} className="w-full mt-4">
        <Image src={upgrade} alt="upgrade" className="w-[20px]" />
        <p className="text-xs font-medium">Upgrade ypur plan</p>
      </Button>
    </ContentWrapper>
  );
};

export default TeamSetup;
