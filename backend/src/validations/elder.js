import * as yup from "yup";

export const elderValidation = yup.object({
  type: yup.string().required(),
  name: yup.string().required,
  desciption: yup.string().required(),
  category: yup.string().required,
});
