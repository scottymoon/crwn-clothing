import SignInForm from "../../components/SignInForm"
import SignUpForm from "../../components/SignUpForm"
import "./styles.scss"

export default function AuthPage() {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
