import logo from '../assets/airbnb-logo.png';

function Navbar() {
    return (    
        <nav className="flex shadow-md p-5">
            <img className="w-20 ml-4" src= {logo} alt="airbnb logo" />
        </nav>
    )
};

export default Navbar;