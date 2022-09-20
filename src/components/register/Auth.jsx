import React from "react";
import axios from "axios";
import "./auth.css";


const Auth = () => {
const[formData,setFormData] = React.useState({
  userName:"",
  password:"",
  email:""
})


const handleChange =(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}


  const submitForm = async() => {
    const data = await axios.post("http://localhost:8000/auth/registration",{...formData})
    console.log(data);
  }


  return (
    <div className="auth">
      <div className="authWrapper">
        <div className="authMain">
          <div className="authInput">
            <label>{'userName'}</label>
            <input onChange={handleChange} type="text" name="userName" placeholder="userName" />
            <label>{'password'}</label>
            <input onChange={handleChange} type="password" name="password" placeholder={'password'} />
                <label>{'email'}</label>
                <input onChange={handleChange} type="email" name="email" placeholder={'email'} />
          </div>
          <div className="authButton">
            <button onClick={submitForm} >Submit.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
