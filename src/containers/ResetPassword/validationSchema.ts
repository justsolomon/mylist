import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default ResetPasswordSchema;
