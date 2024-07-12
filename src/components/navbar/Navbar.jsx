import { CgProfile } from "react-icons/cg";
import React from "react";
import i18next from "i18next";
import "./NavbarStyles.scss";
import Logo from "../../assets/nav-logo.png";
import Cart from "../../assets/menu-cart.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <select onChange={(e) => i18next.changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="uz">UZ</option>
        </select>

        <div className="navbar__menu-line"></div>
        <div className="navbar__menu">
          <div className="navbar__profile">
            <a href="/">
              <CgProfile style={{ width: "22px", height: "22px" }} /> My profile
            </a>
          </div>
          <img src={Logo} alt="Logo" />
          <img src={Cart} alt="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
