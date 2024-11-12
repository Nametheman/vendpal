"use client";
import React from "react";
import { Input } from "@/components/ui/input";

const ConversionRate = () => {
  return (
    <div className="col-span-1">
      <div className="border rounded-2xl">
        <div className="p-4 border-b">
          <p className="font-medium">Conversion rate</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <Input
            id="principalCurrency"
            name="naprincipalCurrencyme"
            type="text"
            value={""}
            onChange={() => {}}
            className="bg-muted border-none"
          />

          <Input
            id="principalCurrency"
            name="naprincipalCurrencyme"
            type="text"
            value={""}
            onChange={() => {}}
            className="bg-muted border-none"
          />
        </div>
      </div>
      <div className="bg-[#FFDAD6] p-8 rounded-3xl mt-4">
        <p className="text-[#BA1A1A]">
          You cannot change the Principal Currency once the financial year has
          commenced
        </p>
      </div>
    </div>
  );
};

export default ConversionRate;
