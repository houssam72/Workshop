import React, { createContext, useEffect, useState } from "react";
import AuthService from "../service/auth-service";
import ProfileService from "../service/profil.service";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.hasToken()) {
      ProfileService.getCurrent()
        .then((response) => {
          ProfileService.getRole()
            .then((res) => {
              setUser({ ...response.data, role: res.data });
            })
            .catch(() => {
              setUser({ ...response.data, role: "USER" });
            });
        })
        .catch(() => {
          AuthService.logout();
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
