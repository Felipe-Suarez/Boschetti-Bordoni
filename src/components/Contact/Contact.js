import React from "react";
// import { useState } from "react";

//style
import "./contact.css";
import "./mediaQuerys.css";
//falta handleSubmit.
//logica de envio.
//estilos.
const handleSubmit = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <section className="form-section">
      
        <h2 className="contact-text">Contactate con nosotros </h2>
        
          <form onClick={handleSubmit} className="form-container">
            <div className="form-box">
            <input type="text" placeholder="Nombre y apellido" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Empresa" />
            <input type="text" placeholder="Industria" />
            <input type="text" placeholder="Cargo" />
            </div>
            <div className="form-box">
            <textarea type="message" placeholder="Mensaje" />
            <button type="submit" className="btn-submit">
              Enviar
            </button>
            </div>
          </form>
  
    </section>
  );
};

export default Contact;
