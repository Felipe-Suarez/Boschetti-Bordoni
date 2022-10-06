import React from 'react';
import quienesSomos from '../../assets/quienesSomos.png';

//stylesheets
import "./quienesSomos.css";
import "./mediaQuerys.css";

const QuienesSomos = () => {
  return (
    <section className="quienes-somos" title='about'>

      <div className="img-container">
        <img src={quienesSomos} alt="imagen de quienes somos" className="quienes-somos-img" />

      </div>

      <div className="text-container">
        <span className="title-quienes-somos">¿Quíenes somos?</span>
        <p className="text-quienes-somos"> Nos especializamos en el asesoramiento y acompañamiento del desarrollo empresarial de nuestros clientes. Tenemos como misión Mejorar la Calidad de Vida de Nuestros Clientes a través de la optimización del uso de las herramientas profesionales y la consolidación de un equipo de trabajo proactivo, capaz de anticipar los problemas y encontrar las soluciones adecuadas para cada situación. Actualmente nos encontramos trabajando en dos oficinas, una situada en la Ciudad Autónoma de Buenos Aires
        </p>
      </div>

    </section>
  )
}

export default QuienesSomos