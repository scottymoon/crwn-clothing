import SignInForm from "../../components/SignInForm"
import SignUpForm from "../../components/SignUpForm"
import "./styles.scss"

export default function AuthPage() {
  return (
    <div className="auth-forms">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
