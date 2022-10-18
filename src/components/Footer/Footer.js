import logoCompleto from "../../assets/logoCompleto.png";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { HiMapPin } from 'react-icons/hi2'
import { IoMdMail } from 'react-icons/io'

//stylesheets
import "./footer.css";
import "./mediaQuerys.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="networks-container">
        <LightSpeed>
          <div>
            <img className="footer-logo" src={logoCompleto} alt="logoFooter" />
          </div>
        </LightSpeed>

        <Bounce bottom>
          <div className="footer-info-container">
            <div className="mail-location-box">
              <div>
                <a href="https://www.google.com.ar/maps/place/Villa+Constituci%C3%B3n,+Santa+Fe/@-33.2353376,-60.3382398,14z/data=!4m5!3m4!1s0x95b76c4760812d55:0xbb412b3c67ec6e48!8m2!3d-33.227158!4d-60.3298704" target='_blank' rel="noreferrer"><HiMapPin className='network-img' /></a>
                <span className="network-txt">
                  Villa Constitución, Santa Fe. Argentina
                </span>
              </div>
              <div>
                <IoMdMail className="network-img" />
                <span className="network-txt">Mail: boschettibordoni@gmail.com</span>
              </div>
            </div>

            <div className="fb-instagram-box">
              <div>
                <a href="https://www.facebook.com/profile.php?id=100086208255264" target='_blank' rel="noreferrer"><BsFacebook className="network-img network-facebook" /></a>
                <span className="network-txt">Consultora Boschetti Bordoni</span>
              </div>
              <div>
                <a href="https://www.instagram.com/boschettibordoniconsultoria/" target='_blank' rel="noreferrer"><AiFillInstagram className="network-img" /></a>
                <span className="network-txt">boschettibordoniconsultoria</span>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </footer>
  );
};

export default Footer;
