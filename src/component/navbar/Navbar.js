import React from "react";
import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import HamburgerDrawer from "../HamburgerDrawer";
const Navbar = ({ setcategories }) => {
  return (
    <div className="nav">
      <div
        className="icon"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <HamburgerDrawer setcategories={setcategories} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        loading="lazy"
        height="80%"
        alt="inshorts image"
      />
    </div>
  );
};

export default Navbar;
