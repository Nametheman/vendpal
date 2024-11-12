import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormikErrors } from "formik";

type SelectInputPropsType = {
  options: any[];
  name: string;
  changeHandler: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<any>>;
};

const SelectInput = ({
  options,
  name,
  changeHandler,
}: SelectInputPropsType) => {
  const [selectedOption, setSelectedOption] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="bg-muted hover:bg-muted justify-start"
        >
          {selectedOption ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={selectedOption.flag}
                  alt="icon"
                  className="w-[30px]"
                  width={20}
                  height={20}
                />
                <p className="font-semibold"> {selectedOption.code}</p>{" "}
              </div>{" "}
              <p> {selectedOption.name}</p>{" "}
            </div>
          ) : (
            "Select an option"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-accent max-h-80 overflow-y-scroll">
        <div className="">
          {options.map((option) => {
            return (
              <div
                key={option.code}
                className="cursor-pointer flex items-center gap-2 p-2 hover:bg-muted"
                onClick={() => {
                  setSelectedOption(option);
                  changeHandler(name, option.code);
                  setOpen(false);
                }}
              >
                <Image
                  src={option.flag ? option.flag : null}
                  alt="icon"
                  className="w-[30px]"
                  width={20}
                  height={20}
                />
                <p className="font-semibold"> {option.code}</p>
                <p className="text-sm"> {option.name}</p>{" "}
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SelectInput;
