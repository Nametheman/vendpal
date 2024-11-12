"use client";
import React from "react";
import useDepartmentStore from "@/store/useDepartmentStore";
import DepartmentCard from "./DepartmentCard";

const DepartmentsSection = () => {
  const { getDepartments } = useDepartmentStore();
  console.log(getDepartments());
  return (
    <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {getDepartments().map((department) => {
        return <DepartmentCard department={department} key={department.name} />;
      })}
    </div>
  );
};

export default DepartmentsSection;
