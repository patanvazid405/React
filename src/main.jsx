import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Vaz from './Laptop.jsx'
import GPT from './components/Toss.jsx'
import {Swiggy} from './components/Swiggy.jsx'
import {Order_fruits, Unordered_fruits} from"./components/fruits.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Swiggy/>
    <GPT/>
    <App/>
    <Vaz/>
    <Swiggy/>
    <Order_fruits/>
    <Unordered_fruits/>
  </StrictMode>,
)
