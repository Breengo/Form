import * as yup from "yup";

const schema = yup.object().shape({
  about: yup.string().max(200).required(),
});

export default schema;
