"use client";
import Image from "next/image";
import icon from "@/assets/icons/21.svg";
import { Dot } from "lucide-react";
type DepartmentType = {
  department: {
    name: string;
    description: string;
    department: number;
    unit: number;
    color: string;
  };
};
const DepartmentCard = ({ department }: DepartmentType) => {
  return (
    <div
      className={`w-full h-[200px] rounded-2xl p-4 flex flex-col gap-2`}
      style={{ backgroundColor: `${department.color}30` }}
    >
      <div
        className="p-4 flex-1 rounded-xl"
        style={{ backgroundColor: `${department.color}90` }}
      >
        <p className="text-[0.8rem]">{department.description}</p>
      </div>
      <div className="flex items-center justify-between py-2">
        <div>
          <p className="text-xs font-semibold mb-1">{department.name}</p>
          <div className="flex items-center">
            <p className="text-[0.65rem]">{department.department} Department</p>
            <Dot size={15} />
            <p className="text-[0.65rem]">{department.unit} Unit</p>
          </div>
        </div>
        <Image src={icon} alt="createIcon" className="w-[30px]" />
      </div>
    </div>
  );
};

export default DepartmentCard;
