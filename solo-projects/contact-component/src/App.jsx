import whiskerson from './assets/mr-whiskerson.png';
import fluffykins from './assets/fluffykins.png'
import felix from './assets/felix.png'
import pumpkin from './assets/pumpkin.png'
import Contact from './components/Contact'

function App() {

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap gap-8 justify-center'>
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
