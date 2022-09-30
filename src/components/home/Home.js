import './home.css'
import './mediaQuerys.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="home-container">
                <div className='home-box-up'>
                    <h2 className="home-title">Contribuimos al desarrollo sostenible</h2>
                    <h3 className="home-subtitle">mediante servicios innovadores y de calidad, creando redes cooperativas.</h3>
                </div>
                <div className='home-box-down'>
                    <h4 className='home-info1'>Boschetti Bordoni</h4>
                    <h4 className='home-info2'>Consultoría integral</h4>
                </div>
            </div>
        </section>
    )
}

export default Home;