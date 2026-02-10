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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Corocels/>
    <Products/>
    {/* <Swiggy/> */}
    {/*<GPT/>
    <App/>
    <Vaz/> */}
    {/* <Swiggy/> */}
    {/* <Order_fruits/>
    <Unordered_fruits/> */}
    
    <Counter/>
    <CounterApp/>
  </StrictMode>,
)
