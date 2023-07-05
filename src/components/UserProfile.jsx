import React, { useContext, useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { UserContext } from "../contexts/UserContext";
import AuthService from "../service/auth-service";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const { setActiveProfileMenu } = useStateContext();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    setIsUserLoaded(false);
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      setIsUserLoaded(true);
    }
  }, [user]);
  return (
    isUserLoaded && (
      <div className="nav-item absolute left-0 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">
            {user.role} Profile
          </p>
          <button className="scale-150" onClick={() => setActiveProfileMenu(false)}><MdOutlineCancel/></button>
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
            className="rounded-full h-24 w-24"
            src={avatar}
            alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">
              {" "}
              {user.firstname + " " + user.lastname}{" "}
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              {" "}
              {user.category}{" "}
            </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
              {" "}
              {user.email}{" "}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={logout}
            className="text-white rounded-md w-[200px] h-[50px] bg-red-600 hover:bg-red-800"
          >
            Deconnexion
          </button>
        </div>
      </div>
    )
  );
};

export default UserProfile;
