import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './data/data'

function App() {
  return (
    <div className='m-auto md:max-w-xl'>
      <Header/>
      <div className='p-10'>
        {
          data.map(item => <Card key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default App
