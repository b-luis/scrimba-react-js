import { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [dark, setDarkMode] = useState(true);
    return (
        <div className="container">
            <Navbar 
                darkMode={dark}
                toggleDarkMode={()=>{ setDarkMode(prevMode => !prevMode) }}
            />
            <Main darkMode={dark}/>
        </div>
    )
}