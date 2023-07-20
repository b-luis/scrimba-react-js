import logo from '../assets/airbnb-logo.png';

function Navbar() {
    return (
        <nav className="p-5 shadow-md">
            <img src= { logo } alt="airbnb logo" className="w-20 ml-4"/>
        </nav>
    )
};

export default Navbar;