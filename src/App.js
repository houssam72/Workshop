import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings,FiUser } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  UserProfile,
} from "./components";
import { Calendar, Kanban, ColorMapping } from "./pages";
import Cards from "./components/pages/Cards";
import "./App.css";
import AuthService from "./service/auth-service";
import { useStateContext } from "./contexts/ContextProvider";
import MySondage from "./components/pages/mySondage";
import { UserContext, UserProvider } from "./contexts/UserContext";
import Home from "./components/Home";
import Formation from "./components/Formation";
import AccessDeniedPage from "./components/AccessDeniedPage";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import Formations from "./components/Formations";
import Answers from "./components/Answers";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    setActiveProfileMenu,
    activeProfileMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext(); 
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []); 

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <UserProvider>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top"> 
                  <button
                    type="button"
                    onClick={() => {setThemeSettings(true)}}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )} 
              <div
                className={
                  activeMenu
                    ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full test255 "
                    : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 test255 "
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}

                  <Routes>
                    <Route path="/agile" element={<Kanban />} />
                    <Route path="/calendar" element={<Calendar />} /> 
                    <Route
                      path="/"
                      element={<PublicRoute component={<Home />} />}
                    />
                    <Route
                      path="/formations"
                      element={<ProtectedRoute component={<Formations />} />}
                    />
                    <Route
                      path="/formation/:id"
                      element={<ProtectedRoute component={<Formation />} />}
                    />
                    <Route
                      path="/sondage"
                      element={<ProtectedRoute component={<MySondage />} />}
                    />
                    <Route
                      path="/profile"
                      element={<ProtectedRoute component={<Greeting/>}/>}
                    />
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute
                          roles={["ADMIN", "MANAGER"]}
                          component={<Dashboard />}
                        />
                      }
                    />
                    <Route
                      path="/dashboard/companies/:id/edit"
                      element={
                        <ProtectedRoute
                          roles={["ADMIN", "MANAGER"]}
                          component={<div>EDIT</div>}
                        />
                      }
                    />
                    <Route
                      path="/dashboard/companies/:id/stats"
                      element={
                        <ProtectedRoute
                          roles={["ADMIN", "MANAGER"]}
                          component={<Answers />}
                        />
                      }
                    />
                    <Route
                      path="/access-denied"
                      element={<PublicRoute component={<AccessDeniedPage />} />}
                    />
                    <Route
                      path="*"
                      element={<PublicRoute component={<ErrorPage />} />}
                    />
                  </Routes>
                </div>
                {/* <Footer /> */}
              </div>
            </div>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

const ProtectedRoute = ({ component, roles }) => {
  const { user } = useContext(UserContext);
  if (!AuthService.hasToken()) {
    return <Navigate to="/" />;
  }

  if (roles && roles.length > 0 && !roles.includes(user.role)) {
    console.log(user.role);
    return <Navigate to="/access-denied" />;
  }

  return component;
};

const PublicRoute = ({ component }) => {
  console.log("oui")
  if (location.pathname === "/access-denied") {
    return component;
  } else if (AuthService.hasToken()) {
    return <Navigate to="/profile" />;
  }
  return component;
};

export default App;
