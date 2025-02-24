import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {logIn ,setUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error,setError]= useState({})
  // console.log(location)
  const handleLogin=(e)=>{
     e.preventDefault()

     const form = e.target
     const email = form.email.value
     const  password= form.password.value
     logIn(email,password)
     .then((loginUser)=>{
      const user = loginUser.user
       setUser(user)
       navigate(location?.state ? location.state : '/');
     })
     .catch((err)=>{
      setError({ ...error , login: err.code}  )
     })
    //  console.log({email,password})
  }
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h1 className="font-semibold text-3xl text-center text-slate-400">Login Your Account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Enter Your Email Address" />
            <label className="fieldset-label">Password</label>
            <input type="password" name="password" className="input" placeholder=" Enter Your Password" />
            <div>

              {
                error.login && (<a className="link link-hover text-red-500">{error.login}</a>)
              }
              <p><a className="link link-hover">Forgot password?</a></p>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center">Don't have an Account ? <Link className='text-red-400 font-semibold text-center' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
