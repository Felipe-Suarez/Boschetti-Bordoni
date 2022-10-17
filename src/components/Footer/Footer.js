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
                <a href="https://www.google.com.ar/maps/place/Chacarita,+CABA/@-34.5880643,-58.4616045,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!2sBuenos+Aires,+CABA!3b1!8m2!3d-34.6036844!4d-58.3815591!3m4!1s0x95bcb5fab4d7e7c7:0xc0677dc30b75b92b!8m2!3d-34.5859985!4d-58.4544363" target='_blank' rel="noreferrer"><HiMapPin className='network-img' /></a>
                <span className="network-txt">
                  Direccion: calle xxx - Oficina xxx
                </span>
              </div>
              <div>
                <IoMdMail className="network-img" />
                <span className="network-txt">Mail: boschetti@gmail.com</span>
              </div>
            </div>

            <div className="fb-instagram-box">
              <div>
                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><BsFacebook className="network-img network-facebook" /></a>
                <span className="network-txt">@boschettibordoni</span>
              </div>
              <div>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><AiFillInstagram className="network-img" /></a>
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
