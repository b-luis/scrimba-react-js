import Contact from './components/Contact'
import whiskerson from './assets/mr-whiskerson.png';
import fluffykins from './assets/fluffykins.png'
import felix from './assets/felix.png'
import pumpkin from './assets/pumpkin.png'

function App() {

  return (
    <div className='flex flex-wrap gap-4 justify-center py-60'>
      <Contact
        name="Mr.Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        image={whiskerson}/>
      <Contact
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
        image={fluffykins}/>
      <Contact
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
        image={felix}/>
      <Contact
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="thecat@hotmail.com"
        image={pumpkin}/>
    </div>
  )
}

export default App
