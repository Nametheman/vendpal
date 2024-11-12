import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

type IconType = {
  className?: string;
  imgSrc: StaticImageData;
};
const Icon = ({ imgSrc, className }: IconType) => {
  return (
    <Image src={imgSrc} alt="icon" className={cn("w-[1.1rem]", className)} />
  );
};

export default Icon;
