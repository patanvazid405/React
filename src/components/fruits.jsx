import React from "react"

function Items(){
    return(
        <React.Fragment>
            <li>Apple</li>
            <li>Banana</li>
            <li>Water Melon</li>
            <li>Grape</li>
        </React.Fragment>
    )
}


export function Order_fruits(){
    return(
        <ul>
            <Items/>
        </ul>
    )
}

export function Unordered_fruits(){
    return(
        <ol>
            <Items/>
        </ol>
    )
}

let arr = ["vazid","patan","niteesh","teja","rajesh"]

export function List_render(){
    return(
        <React.Fragment>
        {arr.map(e=><li>{e}</li>)}   
        </React.Fragment>
    )
}
