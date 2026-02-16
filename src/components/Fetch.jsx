import React from "react"
import Spinners from "./Spinner.jsx"

class Products extends React.Component{
    constructor(){  //constructor 
        super()
        this.state ={
        recipes : []
    }
    }
    
    getProduct =()=>{
        console.log("Data fetched")
        fetch('https://dummyjson.com/recipes')      
            .then(res=>res.json())           
            .then(json=>{
                console.log(json)
                this.setState({recipes : json.recipes})
            })
    }
    
    componentDidMount(){
        this.getProduct()
    
    }
    
    render(){
        return(
            <>
                {/* <button onClick={this.getProduct}>Get data</button> */}
                {this.state.recipes.length>0 ? 
                    <div style={{display:"flex",flexWrap:"wrap",margin:"20px", width:"100%"}}>
                        {this.state.recipes.map(e=><img key={e.id} src={e.image} style={{margin:"10px"}} width={"230px"} ></img>)} 
                    </div>
                : <Spinners/>}
            </>
        )
    }
}

export default  Products