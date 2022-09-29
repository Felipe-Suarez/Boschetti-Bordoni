import './services.css'
import './mediaQuerys.css'

import { useEffect, useState } from 'react'

import Article from './Article'

const Services = () => {

    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('data/data.json')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="services">
            <h2 className='services-title'>Servicios</h2>
            <Article />
        </section>
    )
}

export default Services;