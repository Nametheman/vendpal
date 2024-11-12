import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import data from "@/data/data.json";

interface Department {
  name: string;
  description: string;
  department: number;
  unit: number;
  color: string;
}

interface DepartmentStore {
  departments: Department[];
  getDepartments: () => Department[];
  addDepartment: (department: Department) => void;
}

const useDepartmentStore = create<DepartmentStore>()(
  persist(
    (set, get) => ({
      departments: data,
      getDepartments: () => get().departments,
      addDepartment: (department: Department) =>
        set((state) => ({
          departments: [...state.departments, department],
        })),
    }),
    {
      name: "department-store", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
      partialize: (state) => ({ departments: state.departments }), // Persist only the `departments` field
    }
  )
);

export default useDepartmentStore;
