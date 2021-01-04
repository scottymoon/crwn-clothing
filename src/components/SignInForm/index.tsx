import "./styles.scss"
import { useFormik } from "formik"
import * as yup from "yup"
import { TextField } from "@material-ui/core"
import Button from "../Button"
import { useAppState } from "../../hooks/useAppState"

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
})

export default function SignInForm() {
  const {
    user: { signIn, signInWithGoogle },
  } = useAppState()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values
      signIn(email, password, resetForm)
    },
    validationSchema,
  })

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className="form-input"
          fullWidth
          id="email"
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
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="buttons">
          <Button className="form-button" variant="contained" type="submit">
            Sign in
          </Button>
          <Button
            className="form-button google"
            variant="contained"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}
