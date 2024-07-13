import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../context/CheckoutContext";
import "./NavbarStyles.scss";
import Logo from "../../assets/nav-logo.png";
const Navbar = () => {
  const { cart } = useContext(CheckoutContext);

  const cartCounter = cart.reduce((acc, item) => acc + item.quantity, 0);

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
            <Link to="/login">
              <CgProfile style={{ width: "22px", height: "22px" }} /> My profile
            </Link>
          </div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
            />
          </Link>
          <Link to="/cart">
            <div className="navbar__cart">
              <svg
                className="h-7 w-7 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="navbar__cart-count">{cartCounter}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
