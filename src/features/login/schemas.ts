import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string()
    .required("Password is required")
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .minSymbols(1),
});
