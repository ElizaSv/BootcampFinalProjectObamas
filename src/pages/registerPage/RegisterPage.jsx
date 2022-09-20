import Auth from "../../components/register/Auth";
import "./registerPage.css"

const RegisterPage = () => {
  return (
    <Auth 
    requestURL = "registration"
    userName={"New User Name"}
    password={"New Password"}
    email={"New email"}
    buttonText={"register"}
    isRegister={true}
  />
  )
}

export default RegisterPage
