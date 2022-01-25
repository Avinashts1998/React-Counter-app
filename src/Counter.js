
import React, {Component} from "react";
import './Counter.css'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    increment=()=>{

        this.setState( (prev, props)=> (
            {counter:prev.counter+1}
        ))
    }

    decrement=()=>{
        this.setState( (prev, props)=>(
            {counter:prev.counter-1}
        ))
    }

    clear=()=>{
        this.setState( (prev,props)=>(
            {counter:prev.counter=0}
        ))
    }


    render(){
        return(


            <div className="bg-container">
                <h1 className="headline">MY COUNTER APP</h1>


                <div className="counter-container">
                    
                    <button onClick={this.increment} className="Increment-button">Increment</button>

                    <button onClick={this.clear} className="clear-button">Clear</button>

                    <button onClick={this.decrement} className="decreament-button">Decrement</button>

                    


                </div>
                <div className="result-container">
                        <h1 className="result">{this.state.counter}</h1>
                    </div>



            </div>
        )
    }
}

export default Counter