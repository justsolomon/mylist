import * as Yup from "yup";

export const validationObject = {
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
};

const LoginSchema = Yup.object().shape(validationObject);

export default LoginSchema;
