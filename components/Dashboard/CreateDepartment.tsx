"use client";
import Image from "next/image";
import React, { useState } from "react";
import createIcon from "@/assets/icons/contract_edit.svg";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import CreateForm from "./CreateForm";

const CreateDepartment = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F3F4EF] rounded-2xl p-4 col-span-1 md:col-span-3 xl:col-span-1 h-[200px] flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="border-[5px] border-white bg-[#00361D] h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <Plus className="text-accent" />
        </div>
      </div>
      <Button
        variant={"outline"}
        className="w-full mt-4"
        onClick={() => setOpen(true)}
      >
        <Image src={createIcon} alt="createIcon" className="w-[20px]" />
        <p className="text-xs font-medium">Create a department</p>
      </Button>
      <CreateForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default CreateDepartment;
