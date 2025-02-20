import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h1 className="font-semibold text-3xl text-center text-slate-400">
          Reister Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
            />
            <label className="fieldset-label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your  Photo Url"
            />
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              className="input"
              placeholder=" Enter Your Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center">
            Don't have an Account ?{" "}
            <Link
              className="text-red-400 font-semibold text-center"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
