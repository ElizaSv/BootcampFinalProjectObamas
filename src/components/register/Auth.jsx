import "./auth.css";

const Auth = ({ userName, password, email, buttonText, isRegister }) => {
  return (
    <div className="auth">
      <div className="authWrapper">
        <div className="authMain">
          <div className="authInput">
            <label>{userName}</label>
            <input type="text" placeholder={userName} />
            <label>{password}</label>
            <input type="password" placeholder={password} />
            {isRegister && (
              <>
                <label>{email}</label>
                <input type="email" placeholder={email} />
              </>
            )}
          </div>
          <div className="authButton">
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
