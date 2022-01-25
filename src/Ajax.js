import React,{Component} from "react";
import axios from "axios";

class Ajax extends Component{

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
        
    }

   componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(response=>{
           this.setState({posts:response.data})
           
       })
   }




    render(){


        return(
            <table>

                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((itms, k) => {
                        return(

                            <h1>{itms.title}</h1>

                           
                        )
                    })}


                </tbody>


            </table>

            
        )
    }
}

export default Ajax;





