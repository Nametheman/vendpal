import * as yup from "yup";

export const CreateDepartmentSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  department: yup.number().required("Department is required"),
  unit: yup.number().required("Unit is required"),
  color: yup.string().required("Color is required"),
});
