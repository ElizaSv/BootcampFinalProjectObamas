import Auth from "../../components/register/Auth";
import "./registerPage.css";
import NavIcons from "../../components/NavIcons/NavIcons"

const RegisterPage = () => {
  return (
    <>   
       <NavIcons />
       <Auth 
        requestURL = "registration"
        userName={"New User Name"}
        password={"New Password"}
        email={"New email"}
        buttonText={"register"}
        isRegister={true}
    />
    </>

  )
}

export default RegisterPage
