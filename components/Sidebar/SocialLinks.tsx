import React from "react";
import ContentWrapper from "./ContentWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import telegram from "@/assets/icons/captive_portal.svg";

const SocialLinks = () => {
  return (
    <ContentWrapper className="mt-4">
      <p className="text-xs font-medium">LINKS</p>
      <Button variant={"outline"} className="w-full mt-4 justify-start">
        <Image src={telegram} alt="telegram" className="w-[20px]" />
        <p className="text-xs font-medium">LinkedIn</p>
      </Button>
    </ContentWrapper>
  );
};

export default SocialLinks;
