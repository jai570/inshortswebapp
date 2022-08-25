import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Inshorts clone @2022 all rights reserved</p>
      <hr />
      <div className="icons">
        <a
          href="https://www.instagram.com/accounts/onetap/?next=%2F"
          target="_blank"
        >
          <InstagramIcon style={{ cursor: "pointer" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/jai-kishan-s-669b461a9/"
          target="_blank"
        >
          <LinkedInIcon style={{ cursor: "pointer" }} />
        </a>
        <a
          href="https://www.facebook.com/jaikishan.sharma.98622"
          target="_blank"
        >
          <FacebookIcon style={{ cursor: "pointer" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
