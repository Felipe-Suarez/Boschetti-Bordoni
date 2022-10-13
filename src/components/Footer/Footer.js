import React from "react";
import logoCompleto from "../../assets/logoCompleto.png";
import logoLocation from "../../assets/logoLocation.png";
import logoMail from "../../assets/logoMail.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoFacebook from "../../assets/facebookLogoOk.png"

//stylesheets
import "./footer.css";
import "./mediaQuerys.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="networks-container">
        <div>
          <img className="footer-logo" src={logoCompleto} alt="logoFooter"/>
        </div>

        <div className="mail-location-box">
          <div>
            <img className="network-img" src={logoLocation} alt="logo location"/>
            <span className="network-txt">
              Direccion: calle xxx - Oficina xxx
            </span>
          </div>
          <div>
            <img className="network-img" src={logoMail} alt="logo mail" />
            <span className="network-txt">Mail: boschetti@gmail.com</span>
          </div>
        </div>

        <div className="fb-instagram-box">
          <div>
            <img className="network-img" src={logoFacebook} alt="logo facebook"/>
            <span className="network-txt">@boschettibordoni</span>
          </div>
          <div>
            <img className="network-img" src={logoInstagram} alt="logo instagram" />
            <span className="network-txt">@boschettibordoni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
