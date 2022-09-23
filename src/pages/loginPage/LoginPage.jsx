import Auth from "../../components/register/Auth";
import "./loginPage.css"
import NavIcons from "../../components/NavIcons/NavIcons";

const LoginPage = () => {
  return (
    <> 
      <NavIcons />
      <Auth 
        requestURL = "login"
        password={"password"}
        email={"email"}
        buttonText={"login"}
      />
    </>

  )
}

export default LoginPage