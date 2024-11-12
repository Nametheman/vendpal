import * as yup from "yup";

export const CurrencySchema = yup.object().shape({
  principalCurrency: yup.string().required("Principal currency is required"),
  taxType: yup.string().required("Tax type is required"),
  taxRate: yup.string().required("Tax rate is required"),
  taxRateUnit: yup.number().required("Tax rate unit is required"),
});
