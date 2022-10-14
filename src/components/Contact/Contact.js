import { useRef } from "react";
import emailjs from '@emailjs/browser';

//style
import "./contact.css";
import "./mediaQuerys.css";

const Contact = () => {

  const form = useRef();
  const serviceId = 'service_j19lei5';
  const templateId = 'template_42jndtj';
  const publicKey = 'VTFHGW1HwlxrzSLu4';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section className="form-section">

      <h2 className="contact-text">Contactate con nosotros </h2>

      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="form-box">
          <input type="text" name="user_name" placeholder="Nombre y apellido" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="text" name="user_business" placeholder="Empresa" required />
          <input type="text" name="user_industry" placeholder="Industria" required />
          <input type="text" name="user_role" placeholder="Cargo" required />
        </div>
        <div className="form-box">
          <textarea type="message" name="user_message" placeholder="Mensaje" />
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>

    </section>
  );
};

export default Contact;
