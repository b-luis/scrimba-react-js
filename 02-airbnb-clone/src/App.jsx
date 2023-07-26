import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import katie from './assets/katie-zaferes.png'

function App() {
  return (
    <div className='mx-auto sm:w-3/6 lg:w-2/6 font-poppins'>
      <Navbar/> 
      <Hero/>
      <Card
        img={katie}
        rating={5.0}
        reviewCount={6}
        country = 'USA'
        title = 'Life Lessons with Katie Zaferes'
        price = {136}
      />
    </div>
  )
}

export default App
