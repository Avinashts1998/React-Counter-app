import react, {Component} from "react";


class ListRendering extends Component{
    constructor(props){

        super(props)
        this.state = {

            items:["Avinash", "Shantu", "Motta", "Kukkan", "Jango"],

            users :[
                {name: "Avinash", age:24},
                {name:"Shantu", age:26},
                {name: "Suneesh", age: 50}
            ]
        }
    }


    render(){
var lis = this.state.items.map(function(itms, k) {
    return <li>{itms}</li>
})

        return(

            <div>

               <ul>

                   <li>{lis}</li>
               </ul>

                <table>
                    <tr>
                        <td>name</td>
                        <td>age</td>
                    </tr>

                    

                    {this.state.users.map((itms, k)=>{

                        return (
                        <tr>

                            <td>{itms.name}</td>
                            <td>{itms.age}</td>
                        </tr>
                            
                        )

                    })
                    
                    }
                </table>


            </div>
        )
    }
}

export default ListRendering