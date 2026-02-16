import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavScrollExample from './components/navbar'
import Corocels from './components/FoodTruck/Carousel'
import Products from './components/Fetch'
import GetProduct from './components/useEffect'

function App() {
  return (
    <>
      <NavScrollExample/>
      <Corocels/>
      <>
        <h2 style={{textAlign:"center", color:"red"}}>Our Menu</h2>
      </>
      {/* <Products/> */}
      <GetProduct/>
    </>
  )
}

export default App 
