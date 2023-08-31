import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-logo"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12     my-32 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {" "}
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-slate-600 rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  w-full bg-slate-600 rounded-md"
        />

       

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-slate-600 rounded-md"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-md">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
