import React from "react";
import DatePicker from "./DatePicker";
import CurrencyForm from "./CurrencyForm";
import ConversionRate from "./ConversionRate";

const pages = () => {
  return (
    <div>
      <DatePicker />
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CurrencyForm />
        <ConversionRate />
      </div>
    </div>
  );
};

export default pages;
