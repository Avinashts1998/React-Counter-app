import React, {Component} from 'react'


class Hooks extends Component {

    constructor(props){
        super(props)
        this.state={
            counter:0
        }

        console.log('Costructor Triggerd')
    }

    componentWillMount(){
        console.log("inside component will mount")
    }

    increment=()=>{
        this.setState((prev,props)=>({
            counter:prev.counter+1
        }))
    }


    render(){

        console.log("Inside Render Method")



        
        return(


            <div>
                <h1>HOOKS</h1>
                <button onClick={this.increment}>Increment</button>
                <h1>You have clicked {this.state.counter} Times</h1>
            </div>
        )
    }

    componentDidMount(){

        console.log("Inside component did mount")
    }
}

export default Hooks