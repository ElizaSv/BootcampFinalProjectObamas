import Auth from "../../components/register/Auth";
import "./loginPage.css"

const LoginPage = () => {
  return (
    <Auth 
        userName={"username"}
        password={"password"}
        email={"email"}
        buttonText={"login"}
      />
  )
}

export default LoginPage