import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups"; 
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  }; 
  
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
              >
                <path d="M480-792q130 0 221 91t91 221q0 130-91 221t-221 91q-130 0-221-91t-91-221q0-130 91-221t221-91Zm0 564q104 0 178-74t74-178q0-104-74-178t-178-74q-104 0-178 74t-74 178q0 104 74 178t178 74Zm0-115q47 0 85-26t57-70H338q18 44 56.5 70t85.5 26ZM338-564q0 16.575 11.212 27.787Q360.425-525 377-525q16.575 0 27.788-11.213Q416-547.425 416-564t-11.212-27.787Q393.575-603 377-603q-16.575 0-27.788 11.213Q338-580.575 338-564Zm206 0q0 16.575 11.213 27.787Q566.425-525 583-525t27.787-11.213Q622-547.425 622-564t-11.213-27.787Q599.575-603 583-603t-27.787 11.213Q544-580.575 544-564ZM40-731v-77q0-46 33-79t79-33h77v60h-77q-22.1 0-37.05 14.95Q100-830.1 100-808v77H40ZM152-40q-46 0-79-33t-33-79v-77h60v77q0 22.1 14.95 37.05Q129.9-100 152-100h77v60h-77Zm579-4v-60h77q22.1 0 37.05-14.95Q860-133.9 860-156v-78h60v78q0 46-33 79t-79 33h-77Zm129-687v-77q0-22.1-14.95-37.05Q830.1-860 808-860h-77v-60h77q46 0 79 33t33 79v77h-60ZM480-480Z" />
              </svg>
              <span>Smile</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
