import React from "react";
import NavbarIcon from "../img/navbar_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div>
          <div id="logo">
            <div id="logoName">
              <Link to={`/dashboard`}>
                W B S <span style={{ color: "#fff" }}>F I T</span>
              </Link>
            </div>
            <div id="logoSlogan">a community based fitness app</div>
          </div>
        </div>
      </div>
      <div id="navBarExtended">
        <img src={NavbarIcon} alt="Navbar Icon" />
      </div>
    </>
  );
};

export default Navbar;
