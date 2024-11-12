import { sleep } from "@/helpers/sleep";
import { CreateDepartmentType } from "@/types/CreateDepartmentType";

export const createDepartmentApi = async (values: CreateDepartmentType) => {
  try {
    await sleep(3000);
    return values;
  } catch (error) {
    throw error;
  }
};
