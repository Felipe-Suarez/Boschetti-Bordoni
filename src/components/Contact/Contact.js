import React from "react";
import { useState } from "react";

//style
import "./contact.css";
//falta handleSubmit.
//logica de envio.
//estilos.
const handleSubmit = () => {};

const Contact = () => {
  return (
      <section className="form-container">
        <h2 className="contact-title">Contactate con nosotros</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre y Apellido" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje" name="message" />
          <button type="submit">Enviar</button>
        </form>
      </section>
  );
};

export default Contact;
