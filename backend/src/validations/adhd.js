import * as yup from "yup"

export const adhdValidation = yup.object({
    type: yup.string().required(),
    name: yup.string().required,
    desciption: yup.string().required(),
    category: yup.string().required
})