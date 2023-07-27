import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from '../data/data'

function App() {
  return (
    <div className='mx-auto sm:w-3/6 lg:w-2/6 font-poppins'>
      <Navbar/> 
      <Hero/>
      <div className='flex overflow-x-auto space-x-4 p-4'>
      { 
        data.map((item) => (
          <Card key={item.id} {...item} />
        ))
      }
      </div>
    </div>
  )
}

export default App;
