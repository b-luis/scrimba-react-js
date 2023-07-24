import whiskerson from './assets/mr-whiskerson.png';
import fluffykins from './assets/fluffykins.png'
import felix from './assets/felix.png'
import pumpkin from './assets/pumpkin.png'
import Contact from './components/Contact'

function App() {

  return (
    <div className='fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 flex flex-wrap gap-8 justify-center sm:w-6/12'>
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
