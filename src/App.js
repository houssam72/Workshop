import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Sondage from "./Pages copy/Sondage/Sondage";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  // Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import SignUp from "./components/pages/SignUp";
import Register from "./components/pages/Register";
import Cards from "./components/pages/Cards";
import Home from "./Pages copy/Home/Home";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import MySondage from "./components/pages/mySondage";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const [state, setState] = useState(0);
  const [redirectionPage, setRedirection] = useState(1);
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
 const test=(x)=>{
  setRedirection(x)
    console.log("test",x)
  }

  return (
    <>
      {redirectionPage === 1 ? (
        <div>
          <SignUp test={(x)=>test(x)} />
        </div>
      ) : redirectionPage === 2 ? (
        <div>
          <Register test={(x)=>test(x)}/>
        </div>
      ) : (
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
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
                    {/* dashboard  */}
                    {/* <Route path="/sign-up" element={<SignUp />} /> */}
                    {/* <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} /> */}

                    {/* pages  */}
                    <Route path="/Sondage" element={<MySondage />} />
                    <Route path="/Formation" element={<Cards />} />
                    {/* <Route path="/customers" element={<Customers />} /> */}

                    {/* apps  */}
                    <Route path="/Tableau_Agile" element={<Kanban />} />
                    {/* <Route path="/editor" element={<Editor />} /> */}
                    <Route path="/Calendrier" element={<Calendar />} />
                    {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

                    {/* charts  */}
                    {/* <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} /> */}
                    <Route path="/Graphique" element={<ColorMapping />} />
                    {/* <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} /> */}
                  </Routes>
                </div>
                {/* <Footer /> */}
              </div>
            </div>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
