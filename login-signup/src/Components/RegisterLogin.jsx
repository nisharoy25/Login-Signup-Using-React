import React from "react";
import "./RegisterLogin.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function RegisterLogin() {
  const [action, setAction] = useState('');

  const regsiterLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login  ">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?
              <a href="#" className="ms-2" onClick={regsiterLink}>
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box signup">
        <form action="">
          <h2>Signup</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot"> 
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Signup</button>
          <div className="register-link">
            <p>
              Already have an account?
              <a href="#" className="ms-2" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterLogin;
