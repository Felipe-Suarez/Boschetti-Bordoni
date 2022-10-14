import React from "react";
import logoCompleto from "../../assets/logoCompleto.png";
import logoLocation from "../../assets/logoLocation.png";
import logoMail from "../../assets/logoMail.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoFacebook from "../../assets/facebookLogoOk.png"
import Bounce from 'react-reveal/Bounce';

//stylesheets
import "./footer.css";
import "./mediaQuerys.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="networks-container">
        <div>
          <img className="footer-logo" src={logoCompleto} alt="logoFooter" />
        </div>

        <Bounce bottom>
          <div className="footer-info-container">
            <div className="mail-location-box">
              <div>
                <a href="https://www.google.com.ar/maps/place/Chacarita,+CABA/@-34.5880643,-58.4616045,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!2sBuenos+Aires,+CABA!3b1!8m2!3d-34.6036844!4d-58.3815591!3m4!1s0x95bcb5fab4d7e7c7:0xc0677dc30b75b92b!8m2!3d-34.5859985!4d-58.4544363" target='_blank' rel="noreferrer"><img className="network-img" src={logoLocation} alt="logo location" /></a>
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
                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><img className="network-img" src={logoFacebook} alt="logo facebook" /></a>
                <span className="network-txt">@boschettibordoni</span>
              </div>
              <div>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img className="network-img" src={logoInstagram} alt="logo instagram" /></a>
                <span className="network-txt">@boschettibordoni</span>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </footer>
  );
};

export default Footer;
