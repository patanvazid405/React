import React from "react"

class Counter extends React.Component{
    state ={
        count : 2,
    }
    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    Decrement =()=>{
        this.setState({count:this.state.count-1})
    }
    
    render(){
        return(
            <React.Fragment>
                <h1>Counter App</h1>
                <button onClick={this.Decrement}>-</button>
                <h2 style={{color: this.state.count > 0 ? "green" : this.state.count == 0 ? "white" : "red"}}>count : {this.state.count}</h2>
                <button onClick={this.Increment}>+</button>
            </React.Fragment>
        )
    }
}

export default Counter
