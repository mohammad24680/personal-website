import React from "react";
import { NavLinks } from "./NavLinks";
import Navigate from "../../Styles/Navbar/Navbar.module.scss";

export const Navigation = () => {
  return (
    <nav className={Navigate.main_menu}>
      <NavLinks />
    </nav>
  );
};
