import React from "react";
import NavbarStyle from "../../Styles/Navbar/Navbar.module.scss";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className={NavbarStyle.Navbar_header_menu}>
      <MobileNavigation />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Navbar;
