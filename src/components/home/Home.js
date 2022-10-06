import './home.css'
import './mediaQuerys.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="home-container">
                <div className='home-box-up'>
                    <h2 className="home-title">Queremos ayudar a las organizaciones </h2>
                    <h3 className="home-subtitle">A atravesar situaciones de cambio y transformación</h3>
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