import { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';

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

    return (
        <section className="services">
            <div className="services-arrow-title">
                <span className="arrow-left"></span>
                <h2 className="services-title">Servicios</h2>
                <span className="arrow-right"></span>
            </div>
            <div className="services-container">
                {
                    info.map((service, index) => {
                        return (
                            <Fade bottom key={index}>
                                <article className="services-box">
                                    <img className='services-box-img' src={`${service.img}`} alt={`${service.title}`} />
                                    <span className='services-box-title'>{service.title}</span>
                                    <p className='services-box-text'>{service.text}</p>
                                </article>
                            </Fade>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default Services;


