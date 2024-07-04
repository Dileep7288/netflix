import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 bg-black mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full-Name"
            className="p-4 my-3 bg-gray-700 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-3 bg-gray-700 w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-3 bg-gray-700 w-full rounded-lg"
        />
        <button
          type="submit"
          className="p-3 my-3 border border-black text-white bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
