import React from "react";
import axios from "axios";
import "./auth.css";
import { useNavigate,useSearchParams } from "react-router-dom";

const Auth = ({requestURL, buttonText, userName, password, email}) => {
  const [formData, setFormData] = React.useState({
    userName: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    try {
      const data = await axios.post(`http://localhost:8000/auth/${requestURL}`, { 
        ...formData,
      });
      if (data.status === 200) {
        navigate("/");
      } else {

        navigate("/login");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      navigate(`/login?reason=${error.response.data.message}`);
    }
  };

  return (
    <div className="auth">
      {reason&&
      <h2>{reason}</h2>}
      <div className="authWrapper">
        <div className="authMain">
          <div className="authInput">
            {userName&&
            <>
            <label>{"userName"}</label>
            <input
              onChange={handleChange}
              type="text"
              name="userName"
              placeholder="userName"
            /></>}
            <label>{"password"}</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder={"password"}
            />
            <label>{"email"}</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder={"email"}
            />
          </div>
          <div className="authButton">
            <button onClick={submitForm}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
