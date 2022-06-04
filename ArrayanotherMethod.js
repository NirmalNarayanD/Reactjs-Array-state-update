import React from "react";

class Arrays extends React.Component {
  constructor() {
    super();
    this.state = {
      country: ["India", "Pakistan", "SriLanka"],
    };
   
  }
  
  changeArray = () => {
    let countrys =this.state.country;
    countrys.splice(1,1,"Switzerland")
    this.setState({
     country :countrys
    });

  };
  render() {
    return (
      <div>
        {this.state.country.map((countrys) => (
          <h2 key={countrys}>{countrys}</h2>
        ))}
        <button onClick={this.changeArray}>Change</button>
      </div>
    );
  }
}
export default Arrays;
