import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

import './index.css'
import '../src/components/styles.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <div className="container">
        <Info/>
        <div className="main--section">
          <About/>
          <Interest/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
