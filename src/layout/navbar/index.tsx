import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const clickHandler = () => {
    if (darkTheme) {
      document.querySelector("html")?.classList.add("dark");
      setDarkTheme(false);
    } else {
      document.querySelector("html")?.classList.remove("dark");
      setDarkTheme(true);
    }
  };
  return (
    <nav className="bg-darkBlue p-5 shadow-lg dark:bg-veryLightGray dark:text-veryDarkBlue">
      <ul className="flex justify-between mx-auto max-w-screen-2xl">
        <li>
          <NavLink
            to="/"
            end
            className="font-bold text-xl tracking-wider hover:underline hover:underline-offset-8 transition ease-in-out delay-700"
          >
            Where is the world?
          </NavLink>
        </li>
        <li className="hidden md:block cursor-pointer" onClick={clickHandler}>
          <FontAwesomeIcon icon={faMoon} />{" "}
          <span className="ml-1">Dark Mode</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
