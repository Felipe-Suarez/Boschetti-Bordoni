import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useState, useEffect } from 'react';

//styles
import "swiper/css";
import "swiper/css/navigation";
import "./values.css";
import "./mediaQuerys.css";

const Values = () => {
  const isMobile = () => {
    return window.innerWidth < 600
  }

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.valores)
      });
  }, []);

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
          {
            info.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <span className="value-title">{value.title}</span>
                  <p className="value-txt">{value.text}</p>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>


    </section>
  );
};

export default Values;
