import "./styles.scss"
import { useFormik } from "formik"
import * as yup from "yup"
import { TextField } from "@material-ui/core"
import Button from "../Button"
import { useAppState } from "../../hooks/useAppState"

const validationSchema = yup.object({
  displayName: yup.string().required("Display Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

export default function SignUpForm() {
  const {
    user: { signUp },
  } = useAppState()
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      const { email, password, displayName } = values
      signUp(email, password, displayName, resetForm)
    },
    validationSchema,
  })

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className="form-input"
          fullWidth
          id="displayName"
          name="displayName"
          label="Display Name"
          value={formik.values.displayName}
          onChange={formik.handleChange}
          error={
            formik.touched.displayName && Boolean(formik.errors.displayName)
          }
          helperText={formik.touched.displayName && formik.errors.displayName}
        />
        <TextField
          className="form-input"
          fullWidth
          id="sign-up-email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className="form-input"
          fullWidth
          id="sign-up-password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          className="form-input"
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button className="form-button" variant="contained" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  )
}
