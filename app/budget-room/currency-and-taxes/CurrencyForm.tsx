"use client";
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { CurrencyFormType } from "@/types/CurrencyFormType";
import { CurrencySchema } from "@/schemas/Currency.schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import createIcon from "@/assets/icons/overview.svg";
import SelectInput from "@/components/Customs/SelectInput";
import currencies from "@/data/currencies.json";

const CurrencyForm = () => {
  const initialValues: CurrencyFormType = {
    principalCurrency: "",
    taxType: "",
    taxRate: "",
    taxRateUnit: 0,
  };

  const currencyFormSubmit = async (values: CurrencyFormType) => {
    console.log(values);
  };
  return (
    <div className="col-span-1 border rounded-2xl">
      <div className="p-4 border-b">
        <p className="font-medium">Currency</p>
      </div>
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={CurrencySchema}
          onSubmit={currencyFormSubmit}
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => {
            return (
              <Form>
                <div className="grid gap-6 p-4 pb-[6rem]">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="principalCurrency" className="">
                        Principal Currency
                      </Label>{" "}
                      <p className="text-[0.55rem] font-medium bg-[#C5FCD6] text-primary p-1 rounded-md">
                        Basic User
                      </p>
                    </div>

                    <SelectInput
                      options={currencies}
                      name="principalCurrency"
                      changeHandler={setFieldValue}
                    />

                    {/* <Input
                      id="principalCurrency"
                      name="principalCurrency"
                      type="text"
                      value={values.principalCurrency}
                      onChange={handleChange}
                      className="bg-muted border-none"
                    /> */}
                    {touched.principalCurrency && errors.principalCurrency && (
                      <ErrorMessage
                        name="principalCurrency"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="taxType" className="">
                      Tax type
                    </Label>{" "}
                    <Input
                      id="taxType"
                      name="taxType"
                      type="text"
                      value={values.taxType}
                      onChange={handleChange}
                      className="bg-muted border-none"
                    />
                    {touched.taxType && errors.taxType && (
                      <ErrorMessage
                        name="taxType"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 grid grid-cols-1 gap-2">
                      <Label htmlFor="taxRate" className="">
                        Tax rate
                      </Label>{" "}
                      <Input
                        id="taxRate"
                        name="taxRate"
                        type="text"
                        value={values.taxRate}
                        onChange={handleChange}
                        className="bg-muted border-none"
                      />
                      {touched.taxRate && errors.taxRate && (
                        <ErrorMessage
                          name="taxRate"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      )}
                    </div>{" "}
                    <div className="col-span-1 grid grid-cols-1 gap-2">
                      <Label htmlFor="taxRateUnit" className="">
                        Tax rate unit
                      </Label>{" "}
                      <Input
                        id="taxRateUnit"
                        name="taxRateUnit"
                        type="number"
                        value={values.taxRateUnit}
                        onChange={handleChange}
                        className="bg-muted border-none"
                      />
                      {touched.taxRateUnit && errors.taxRateUnit && (
                        <ErrorMessage
                          name="taxRateUnit"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-t p-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#00361D] hover:bg-[#00361D]"
                  >
                    {false ? (
                      <ClipLoader color="#fff" size={20} />
                    ) : (
                      <p className="text-[#C5FCD6] flex gap-2">
                        {" "}
                        <Image
                          src={createIcon}
                          alt="createIcon"
                          className="w-[20px]"
                        />
                        Edit overview
                      </p>
                    )}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CurrencyForm;
