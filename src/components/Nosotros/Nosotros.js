import { useState, useEffect } from 'react';

//style
import "./nosotros.css";
import "./mediaQuerys.css"

const Nosotros = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('data/data.json')
            .then((response) => response.json())
            .then((data) => {
                setInfo(data.nosotros)
            });
    }, []);

    return (
        <section className="nosotros">
            {
                info.map((nosotros, index) => {
                    return (
                        <div className="nosotros-container" key={index}>
                            <span className="nosotros-title">{nosotros.title}</span>
                            <p className="nosotros-text">{nosotros.text}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Nosotros;