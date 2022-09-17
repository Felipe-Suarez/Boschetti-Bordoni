import './services.css'
import './mediaQuerys.css'

const Services = () => {
    return (
        <section className="services">
            <h2 className='services-title'>Servicios</h2>
            <article className="services-box">
                <img className='services-box-img' src='' alt='empresas
                    familiares' />
                <span className='services-box-title'>Asesoría de empresas familiares</span>
                <p className='services-box-text'>Planificación patrimonial y financiera, mediación, manuales de procedimientos, establecimiento de protocolos.
                </p>
            </article>
            <article className='services-box'>
                <img className='services-box-img' src='' alt='Finanzas para Pymes' />
                <span className='services-box-title'>Finanzas para Pymes</span>
                <p className='services-box-text'>Flujos de fondos, gestión crediticia, evaluación de proyectos de inversión, asesoría en planificación financiera a corto y largo plazo, etc.
                </p>
            </article>
            <article className='services-box'>
                <img className='services-box-img' src='' alt='Outsourcing management' />
                <span className='services-box-title'>Outsourcing management</span>
                <p className='services-box-text'>Delegación de la gestión financiera y administrativa a fin de que los propietarios prioricen su actividad productiva.</p>
            </article>
            <article className='services-box'>
                <img className='services-box-img' src='' alt='estratégica
                    comercial' />
                <span className='services-box-title'>Dirección estratégica comercial</span>
                <p className='services-box-text'>Planificación comercial, establecimiento y seguimiento de objetivos, dirección de equipos de venta, marketing y marketing digital
                </p>
            </article>
            <article className='services-box'>
                <img className='services-box-img' src='' alt='Control de gestión' />
                <span className='services-box-title'>Control de gestión</span>
                <p className='services-box-text'>Control de stocks, reportes de rentabilidad, tableros de control.
                </p>
            </article>
            <article className='services-box'>
                <img className='services-box-img' src='' alt='Análisis de datos' />
                <span className='services-box-title'>Análisis de datos</span>
                <p className='services-box-text'>Te ayudamos a medir los datos que genera tu negocio y te presentamos la información de manera simple para que puedas tomar decisiones que optimicen tus resultados.
                </p>
            </article>
        </section>
    )
}

export default Services;