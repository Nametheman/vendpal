"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreateDepartmentSchema } from "@/schemas/CreateDepartment";
import { CreateDepartmentType } from "@/types/CreateDepartmentType";
import { Formik, Form, ErrorMessage } from "formik";
import generateRandomColor from "@/helpers/generateRandomColor";
import { useMutation } from "@tanstack/react-query";
import { createDepartmentApi } from "@/api/departments.api";
import useDepartmentStore from "@/store/useDepartmentStore";
import { useToast } from "@/hooks/use-toast";
import { ClipLoader } from "react-spinners";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateForm = ({ open, setOpen }: Props) => {
  const { toast } = useToast();
  const { addDepartment } = useDepartmentStore();
  const { mutate, isPending } = useMutation({
    mutationFn: createDepartmentApi,
    mutationKey: ["create-department"],
    onSuccess: (data) => {
      console.log("success: ", data);
      addDepartment(data);
      setOpen(false);
      toast({
        title: "Success",
        description: "Department created successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong, please try again",
      });
    },
  });

  const initialValues: CreateDepartmentType = {
    name: "",
    description: "",
    department: 0,
    unit: 0,
    color: generateRandomColor(),
  };

  const createDepartment = async (values: CreateDepartmentType) => {
    mutate(values);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Department</DialogTitle>
          <DialogDescription>
            Create a new department here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={CreateDepartmentSchema}
          onSubmit={createDepartment}
        >
          {({ errors, touched, values, handleChange }) => {
            return (
              <Form>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="name" className="">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {touched.name && errors.name && (
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="description" className="">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      className="resize-none h-[100px]"
                      value={values.description}
                      onChange={handleChange}
                    />
                    {touched.description && errors.description && (
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="unit" className="">
                        Unit
                      </Label>
                      <Input
                        id="unit"
                        name="unit"
                        type="number"
                        min={1}
                        value={values.unit}
                        onChange={handleChange}
                      />

                      {touched.unit && errors.unit && (
                        <ErrorMessage
                          name="unit"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="department" className="">
                        Department
                      </Label>
                      <Input
                        id="department"
                        name="department"
                        type="number"
                        min={1}
                        value={values.department}
                        onChange={handleChange}
                      />

                      {touched.department && errors.department && (
                        <ErrorMessage
                          name="department"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="w-[150px]">
                    {isPending ? (
                      <ClipLoader color="#fff" size={20} />
                    ) : (
                      "Save changes"
                    )}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateForm;
