import * as yup from "yup";

const schema = yup.object().shape({
  nickname: yup
    .string()
    .max(30)
    .matches(/^[^.]*$/, {
      message: "No period",
    })
    .matches(/^[^!@#$%^&*+=<>:;|~]*$/, {
      message: "No symbols",
    })
    .required(),
  name: yup.string().max(50).strict().required(),
  sername: yup.string().max(50).strict().required(),
  sex: yup.string().oneOf(["man", "woman"]).required(),
});

export default schema;
