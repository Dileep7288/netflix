import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userlogo" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
