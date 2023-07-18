import logo from '../assets/react-logo.png'
import './styles.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <img className="navbar-img" src={logo} alt="react-logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;