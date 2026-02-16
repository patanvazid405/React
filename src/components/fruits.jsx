import React from "react"

function Items({ arr }){
    return(
        <React.Fragment>
            {arr?.map((e, i)=><li key={i}>{e}</li>)}
        </React.Fragment>
    )
}


export function Order_fruits({ n }){
    return(
        <ul>
            <Items arr={n}/>
        </ul>
    )
}

export function Unordered_fruits({ n }){
    return(
        <ol>
            <Items arr={n}/>
        </ol>
    )
}

let arr = ["vazid","patan","niteesh","teja","rajesh"]

export function List_render(){
    return(
        <React.Fragment>
        {arr.map((e, i)=><li key={i}>{e}</li>)}   
        </React.Fragment>
    )
}
