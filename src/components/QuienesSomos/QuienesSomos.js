import quienesSomos from '../../assets/quienesSomos.png';

//stylesheets
import "./quienesSomos.css";
import "./mediaQuerys.css";

const QuienesSomos = () => {
  return (
    <section className="quienes-somos">

      <div className="img-container">
        <img src={quienesSomos} alt="imagen de quienes somos" className="quienes-somos-img" />
      </div>

      <div className="text-container">
        <span className="title-quienes-somos">¿Quíenes somos?</span>
        <p className="text-quienes-somos"> Somos un grupo de profesionales de diversas disciplinas con amplia experiencia en el mercado laboral y nos dedicamos a asistir tanto a dueños de pymes como emprendimientos, que sientan la necesidad de profesionalizar e impulsar el desarrollo de sus negocios, estableciendo procesos y procedimientos que les permitan adaptarse de la mejor manera a las nuevas exigencias competitivas del mercado. Nos especializamos en abordar con una mirada estratégica y tecnológica las distintas dificultades que transitan nuestros clientes de forma personalizada, ofreciendo información de calidad para fundamentar la toma de decisiones y brindar soluciones a medida.
        </p>
      </div>

    </section>
  )
}

export default QuienesSomos