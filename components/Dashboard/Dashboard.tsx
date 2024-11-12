import React from "react";
import CreateDepartment from "./CreateDepartment";
import DepartmentsSection from "./DepartmentsSection";

const Dashboard = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 xl:gap-y-0 xl:gap-4">
      <DepartmentsSection />
      <CreateDepartment />
    </div>
  );
};

export default Dashboard;
