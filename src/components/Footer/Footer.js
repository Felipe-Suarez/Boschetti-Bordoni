import React from "react";
import logoLocation from "../../assets/logoLocation.png";
import logoMail from "../../assets/logoMail.png";
import logoInstagram from "../../assets/logoInstagram.png";

//stylesheets
import "./footer.css";
import "./mediaQuerys.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="networks-container">
        <div>
          <img className="footer-logo" />
        </div>

        <div className="mail-location-box">
          <div>
            <img className="network-img" src={logoLocation} />
            <span className="network-txt">
              Direccion: calle xxx - Oficina xxx
            </span>
          </div>
          <div>
            <img className="network-img" src={logoMail} />
            <span className="network-txt">Mail: boschetti@gmail.com</span>
          </div>
        </div>

        <div className="fb-instagram-box">
          <div>
            <img className="network-img" />
            <span className="network-txt">@boschettibordoni</span>
          </div>
          <div>
            <img className="network-img" src={logoInstagram} />
            <span className="network-txt">@boschettibordoni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
