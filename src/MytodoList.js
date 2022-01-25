import react,{Component} from "react";

import "./MytodoList.css"

class MyTodoList extends Component{

    constructor(props){
        super(props)
        this.state={
            items: [],
            txtContent:""
        }
    }

        txtChange = (e)=>{

            this.setState({txtContent:e.target.value})

        }

        addItems = () => {
            let currentText = this.state.txtContent
            let currentItems = this.state.items 
            currentItems.push(currentText)
            this.setState({items:currentItems})

        }

        removeItem=(i)=>{
            let currentItem = this.state.txtContent   // This functionality is now working due to some technichal issues //
            currentItem.splice(i, 1);

        }

        


    render(){

        var lis = this.state.items.map(function(itm, k){
            return <p className="list-items">{itm}</p>
        })

       

        return(


            <div className="bg-container">
                <h1 className="main-headline">My To-Do List</h1>
                <div className="todo-container">

                   <input placeholder="Please enter content Here" onChange={this.txtChange} className="input-style" type="text" />

                   <button onClick={this.addItems} className="add-button">Add</button>

                   <div className="list-container">
                      <p>{lis}</p>

                   </div>

                </div>
               
               

              

            </div>
        )
    }
}

export default MyTodoList;
