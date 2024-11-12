"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";
import brody from "@/assets/images/brody.png";
import mail from "@/assets/icons/mail.svg";
import earth from "@/assets/icons/language.svg";
import tune from "@/assets/icons/page_info.svg";
import { Button } from "../ui/button";

const AccountSetup = () => {
  return (
    <ContentWrapper>
      <div className="flex items-center gap-4">
        <Image src={brody} alt="brody" className="w-[40px]" />
        <p className="text-lg font-medium">Ventura Brody</p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Image src={mail} alt="mail" className="w-[20px]" />
        <p className="text-xs text-secondary">venturaBrody@co.ng</p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Image src={earth} alt="earth" className="w-[20px]" />
        <p className="text-xs text-secondary">Lagos, Nigeria</p>
      </div>
      <Button variant={"outline"} className="w-full mt-4">
        <Image src={tune} alt="tune" className="w-[20px]" />
        <p className="text-xs font-medium">Set up your account</p>
      </Button>
    </ContentWrapper>
  );
};

export default AccountSetup;
