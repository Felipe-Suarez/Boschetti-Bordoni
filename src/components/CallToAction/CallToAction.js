import { Link, animateScroll as scroll } from "react-scroll";

import './callToAction.css'

const CallToAction = () => {
    return (
        <aside>
            <div className="aside-container">
                <h3 className="aside-title">Hablemos sobre tu negocio</h3>
                <Link to="form-section" smooth={true} offset={-100} duration={500}>
                    <button className="aside-btn">Escribinos</button>
                </Link>
            </div>
        </aside>
    )
}

export default CallToAction;