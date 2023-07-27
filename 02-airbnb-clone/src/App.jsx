import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from '../data/data'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


function App() {
  const cards = data.map((props) => {
    return <Card
      img={props.coverImg}
      rating={props.stats.rating}
      reviewCount={props.stats.reviewCount}
      location = {props.location}
      title = {props.title}
      price = {props.price}
    />
  })
  return (
    <div className='mx-auto sm:w-3/6 lg:w-2/6 font-poppins'>
      <Navbar/> 
      <Hero/>
      <div className='flex overflow-x-auto space-x-4 p-4'>
        {cards}
      </div>
    </div>
  )
}

export default App
