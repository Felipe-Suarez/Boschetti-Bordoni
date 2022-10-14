import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//styles
import "swiper/css";
import "swiper/css/navigation";
import "./values.css";
import "./mediaQuerys.css";

const Values = () => {
  const isMobile = () => {
    return window.innerWidth < 600
  }

  return (
    <section className="values">

      <div className="title-box">
        <span className="arrow-left"></span>
        <h2 className="services-title">Valores</h2>
        <span className="arrow-right"></span>
      </div>

      <div className="swiper-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={isMobile() ? 1 : 3}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <span className="value-title">Proactividad</span>
            <p className="value-txt">Se impulsa a innovar, pese a los posibles riesgos, con un enfoque pragmático, orientado a la viabilidad, la eficiencia, la eficacia y el control de riesgos.</p>
          </SwiperSlide>
          <SwiperSlide>
            <span className="value-title">Transparencia</span>
            <p className="value-txt">Es la base de todas las acciones tanto con clientes como con asociados y colaboradores, porque se cree en la transparencia como motor de confianza y buena gestión en el trabajo.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <span className="value-title">Solidaridad</span>
            <p className="value-txt">Busca involucrarse con los proyectos de clientes, con sus esfuerzos y metas, equilibrar los intereses para el bien común.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <span className="value-title">Sostenibilidad</span>
            <p className="value-txt">Una empresa sólo puede perdurar en el tiempo si es sostenible, es decir, si sabe aprovechar al máximo sus recursos, tanto tangibles como intangibles. Para que cualquier organización comprometida con la sostenibilidad es fundamental la implicación de sus grupos de interés en la comprensión de los impactos de sus acciones, decisiones, productos, etc.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <span className="value-title">Creación y difusión del conocimiento</span>
            <p className="value-txt">Se tiene el objetivo de ser cada día una auténtica comunidad de conocimiento y aprendizaje continuo, de la cual participan colaboradores, asociados y clientes, así como otras entidades y personas. A través de ese conocimiento compartido se genera valor, orientado siempre hacia la sostenibilidad.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <span className="value-title">Carácter emprendedor</span>
            <p className="value-txt">Se pretende desarrollar formas innovadoras para asistir y acompañar a emprendedores y empresas.
            </p>
          </SwiperSlide>

        </Swiper>
      </div>


    </section>
  );
};

export default Values;
