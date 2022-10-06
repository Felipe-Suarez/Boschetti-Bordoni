import React from "react";
// import { useState } from "react";

//style
import "./contact.css";
//falta handleSubmit.
//logica de envio.
//estilos.
const handleSubmit = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <section className="form">

      <div className="form-container">
        <span className="contact-text">Contactate con nosotros</span>
        <div className="form-box">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Nombre y apellido" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Empresa" />
            <input type="text" placeholder="Industria" />
            <input type="text" placeholder="Cargo" />
            <textarea type="message" placeholder="Mensaje" />
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
