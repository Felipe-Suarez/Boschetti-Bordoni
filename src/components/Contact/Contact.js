//style
import "./contact.css";
import "./mediaQuerys.css"; import { useRef, useState } from "react";

//email.js
import emailjs from '@emailjs/browser';

//component
import Input from './Input'

//toast
import { ToastContainer, toastSuccess, toastIncomplete, toastError } from '../../utils/toast'

const Contact = () => {

  //emailjs
  const form = useRef();
  const serviceId = 'service_j19lei5';
  const templateId = 'template_42jndtj';
  const publicKey = 'VTFHGW1HwlxrzSLu4';

  //states
  const [valueName, setName] = useState('')
  const [valueEmail, setEmail] = useState('')
  const [valueEmpresa, setEmpresa] = useState('')
  const [valueIndustria, setIndustria] = useState('')
  const [valueCargo, setCargo] = useState('')
  const [valueTextarea, setTextarea] = useState('Hola, me gustaria agendar una reunion')

  const inputValues = [
    valueName, valueEmail, valueEmpresa, valueIndustria, valueCargo, valueTextarea
  ]

  const sendEmail = (e) => {
    e.preventDefault();
    let i = 0;

    inputValues.forEach(element => {
      if (element === '') {
        i++
      }

    });

    if (i) {
      toastIncomplete()
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          toastSuccess()
        }, (error) => {
          toastError()
        });
    }

    e.target.reset();
  };

  return (
    <section className="form-section">

      <h2 className="contact-text">Contactate con nosotros </h2>

      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="form-box">
          <Input type="text" name="user_name" placeholder="Nombre y apellido" setState={setName} state={valueName} />
          <Input type="email" name="user_email" placeholder="Email" setState={setEmail} state={valueEmail} />
          <Input type="text" name="user_business" placeholder="Empresa" setState={setEmpresa} state={valueEmpresa} />
          <Input type="text" name="user_industry" placeholder="Industria" setState={setIndustria} state={valueIndustria} />
          <Input type="text" name="user_role" placeholder="Cargo" setState={setCargo} state={valueCargo} />
        </div>
        <div className="form-box">
          <Input type="message" name="user_message" placeholder="Mensaje" setState={setTextarea} state={valueTextarea} />
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>
      <ToastContainer />

    </section>
  );
};

export default Contact;
