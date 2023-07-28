import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import data from './data/data'

function App() {

  return (
    <>
      <Header/>
      {data.map((item) => <Card key={item.id} {...item}/>)}
    </>
  )
}

export default App
