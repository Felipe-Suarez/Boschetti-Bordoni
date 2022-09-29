
import { useEffect, useState } from "react";

//style and query
import "./services.css";
import "./mediaQuerys.css";

const Services = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.servicios);
      });
  }, []);
  
  //console.log(info);
  

  return(
        <section className="services">
          { 
            info.map(( service, index) => {
              return(
                <article className="services-box" key={index}>
                  <img className='services-box-img' src='' alt='empresas
                  familiares' />
                  <span className='services-box-title'>{service.title}</span>
                  <p className='services-box-text'>{service.text}</p>
                </article>
              )
            })      
          }
        </section>
  ) 
};

export default Services;


