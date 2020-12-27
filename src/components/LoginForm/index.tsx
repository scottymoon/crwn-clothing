import "./styles.scss"
import { useFormik } from "formik"
import * as yup from "yup"

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

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema,
  })

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Login with your email and password</span>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <span>{formik.errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <span>{formik.errors.password}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
