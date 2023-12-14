import * as yup from "yup";

const schema = yup.object().shape({
  advantages: yup.array(yup.string().required()).required(),
  radio: yup.number().required(),
  checkboxes: yup.array(yup.number()).required(),
});

export default schema;
