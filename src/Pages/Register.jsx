import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createNewUser,setUser ,updateUserProfile}= useContext(AuthContext)
  const [error, setError]= useState("")
  const navigate = useNavigate()

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    // get from data value
    const form = new FormData(e.target)
    const name = form.get("name")
    
    if(name.length < 4){
      setError({ ...error, name: 'name must be more than 4 charectar long'})
      return
    }

    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log({email,name,photo,password})

    createNewUser(email,password)
    .then((result)=>{
      const user = result.user
      setUser(user)
      updateUserProfile({displayName:name, photoURL:photo})
      .then(()=>{
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log(user)
    })
    .catch((error)=>{
     const  codeError= error.code
     const  errorMessage= error.Message
     console.log(codeError,errorMessage)
    })

  }

  console.log("this error",error)
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h1 className="font-semibold text-3xl text-center text-slate-400">
          Reister Your Account
        </h1>
        <form onSubmit={handleOnSubmit} className="card-body">
          <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
            <input
             name="name"
              type="text"
              className="input"
              placeholder="Enter Your Name"
            />
             {
              error?.name && (<label className="fieldset-label text-red-400">{error?.name}</label>)
            }
            <label className="fieldset-label">Photo</label>
            <input
            name="photo"
              type="text"
              className="input"
              placeholder="Enter Your  Photo Url"
            />
            <label className="fieldset-label">Email</label>
            <input
            name="email"
              type="email"
              className="input"
              placeholder="Enter Your Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
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
        </form>
      </div>
    </div>
  );
};

export default Register;
