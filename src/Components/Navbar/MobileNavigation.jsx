import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import MobileNavigate from "../../Styles/Navbar/Navbar.module.scss";
import MenuToggle from "./MenuToggle";
export const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <div className={MobileNavigate.header_head_top}>
        <div className={MobileNavigate.head_top_logo}>
          <figure>
            <img
              src="/images/Header/MYLOGO.png"
              alt=""
              width={65}
              height={65}
            />
          </figure>
        </div>
        <div className={MobileNavigate.header_corner_right_top}>
          <div className={MobileNavigate.header_corner_information}>
            <h3>
              <span>C</span>reative
            </h3>
            <h3>
              <span>D</span>eveloper
            </h3>
          </div>
        </div>
      </div>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav className={MobileNavigate.hamburger_menu}>
          <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        </nav>
      )}
    </>
  );
};
