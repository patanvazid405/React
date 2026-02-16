import { useState } from "react"

function CounterApp(){

    let [num,setCount] = useState(0) ; //[varaible,function()]

    const increment=()=>{
        setCount(num+1)

    }
    const decrement=()=>{
        setCount(num-1)
    }
   
    return(
        <div style={{textAlign:"center"}}> 
        <h1>Counter Application</h1>
        <button onClick={decrement}>-</button>
        <p>count :{num}  </p>
        <button onClick={increment}>+</button>
        </div>
    )
}

export default CounterApp