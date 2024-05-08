import React, { useState } from "react";
import "./RegisterLogin.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterLogin() {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const onSubmit = (data) => {
    // Here you would handle the form submission, for now, let's just display a toast
    toast.success("Data added successfully!");
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className="input-box">
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              placeholder="Username"
              id="username"
            />
            <p className="error">{errors.username?.message}</p>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Password"
              id="password"
            />
            <p className="error">{errors.password?.message}</p>
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
              <a href="#" className="ms-2" onClick={registerLink}>
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Signup</h2>
          <div className="input-box">
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              placeholder="Username"
              id="username"
            />
            <p className="error">{errors.username?.message}</p>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="Email"
              id="email"
            />
            <p className="error">{errors.email?.message}</p>
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 10,
                  message: "Password must not exceed 10 char",
                },
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 char",
                },
              })}
              type="password"
              placeholder="Password"
              id="password"
            />
            <p className="error">{errors.password?.message}</p>
            <FaLock className="icon" />
          </div>

          <div className="input-box">
            <input
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
            />
            <p className="error">{errors.confirmPassword?.message}</p>
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
      <ToastContainer />
    </div>
  );
}

export default RegisterLogin;
