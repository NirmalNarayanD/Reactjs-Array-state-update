import React from "react";

class ForLoop extends React.Component{
    constructor(){
        super();
        this.state={
            country:["India","Pakistan","Srilanka"]
        }
    }
    change=()=>{
        const element=this.state.country;
        for(let i=0; i<element.length;i++){
            if(i===1){
                element[i]="America";
            }
            this.setState({element})
        }

    }
    render(){
        return(<>
       <h1>{this.state.country}</h1>
       <button onClick={this.change}>Change</button>
       </>)
    }
}
export default ForLoop;