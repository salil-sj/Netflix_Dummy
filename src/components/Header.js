import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store=> store.user)


  const handleSignout = () => {
    signOut(auth)
      .then(() => {
       navigate("/") 
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex p-3">
        <img
          className="w-12 h12"
          src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfQy06KCq87W959_ASfZ78T-34XjYXvXndSdD6n9DKjeKaMooe7LiYFm2kVFFtB_wH6sT4g_5TC1cDFHso1g86IUDq10.png?r=962"
        />
        <button onClick={handleSignout} className="text-white ml-2">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
