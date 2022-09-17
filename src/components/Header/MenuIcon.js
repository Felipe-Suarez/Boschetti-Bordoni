import './menuIcon.css';

const MenuIcon = (props) => {

    return (
        <button onClick={props.handleClick} className={`nav-menu-icon ${props.open ? 'open' : ''}`}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
        </button>
    )
}

export default MenuIcon;