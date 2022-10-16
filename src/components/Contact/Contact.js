import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";

//style
import "./contact.css";
import "./mediaQuerys.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const form = useRef();
  const serviceId = 'service_j19lei5';
  const templateId = 'template_42jndtj';
  const publicKey = 'VTFHGW1HwlxrzSLu4';
  const notify = () => toast.success("Enviado con éxito",{
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log();
      }, (error) => {
        console.log(error);
      });
      e.target.reset();
  };

  return (
    <section className="form-section">

      <h2 className="contact-text">Contactate con nosotros </h2>

      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="form-box">
          <input type="text" name="user_name" placeholder="Nombre y apellido"  />
          <input type="email" name="user_email" placeholder="Email"  />
          <input type="text" name="user_business" placeholder="Empresa"  />
          <input type="text" name="user_industry" placeholder="Industria" />
          <input type="text" name="user_role" placeholder="Cargo"  />
        </div>
        <div className="form-box">
          <textarea type="message" name="user_message" placeholder="Mensaje" />
          <button onClick={notify} type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>
      <ToastContainer/>

    </section>
  );
};

export default Contact;
