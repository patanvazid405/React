import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Vaz from './Laptop.jsx'
import GPT from './components/Toss.jsx'
import {Swiggy} from './components/Swiggy.jsx'
import {Order_fruits, Unordered_fruits} from"./components/fruits.jsx"
import Counter from './components/Counter.jsx'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from"./components/navbar.jsx";
import Corocels from './components/Corocels.jsx'
import Spinner from './components/Spinner.jsx'
import Products from './components/Fetch.jsx'
import CounterApp from './components/FunctionCounter.jsx'
import Prod from './components/useEffect.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
    {/* <Navbar/>
    <Corocels/>
    <Products/> */}
    {/* <Prod/> */}
    {/* <Swiggy/> */}
    {/*<GPT/>
    <App/>
    <Vaz/> */}
    {/* <Swiggy/> */}
    {/* <Order_fruits n={["apple","banana","orange","mango"]}/>
    <Unordered_fruits n={["apple","banana","orange","mango"]}/>
    
    <Counter/>
    <CounterApp/> */}
  </>
)
