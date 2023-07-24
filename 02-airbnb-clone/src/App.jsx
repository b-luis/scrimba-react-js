import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <div className='mx-auto sm:w-3/6 lg:w-2/6 font-poppins'>
      <Navbar/> 
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
