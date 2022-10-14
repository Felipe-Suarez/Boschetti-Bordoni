import './home.css'
import './mediaQuerys.css'

import Bounce from 'react-reveal/Bounce';

const Home = () => {
    return (
        <section className='home'>
            <div className="home-container">
                <div className='home-box'>
                    <Bounce top>
                        <h2 className="home-title">Queremos ayudar a las organizaciones </h2>
                        <h3 className="home-subtitle">A atravesar situaciones de cambio y transformación</h3>
                    </Bounce>
                </div>
            </div>
        </section >
    )
}

export default Home;