import * as Yup from "yup";
import { validationObject } from "../Login/loginValidation";

const SignupSchema = Yup.object().shape({
  ...validationObject,
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default SignupSchema;
