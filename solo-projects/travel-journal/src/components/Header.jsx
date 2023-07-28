import { BsGlobeAmericas } from "react-icons/bs";
import { IconContext } from "react-icons";

function Header(){
    return (
        <header className="flex p-4 bg-[#F55A5A] text-white items-center justify-center">
            <IconContext.Provider value={{className: "text-2xl" }}>
                <BsGlobeAmericas />
            </IconContext.Provider>
            <h1 className="text-sm px-2">my travel journal.</h1>
        </header>
    )
}

export default Header;