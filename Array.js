import React from "react";

class Array extends React.Component {
  constructor() {
    super();
    this.state = {
      country: ["India","Pakistan","SriLanka"],
    };
 
  }
  changeArray = () => {
    this.setState({
      country: ["Switzerland","Egypt", "London"],
    });
  
  };
  render() {
    return (
      <div>
        <p>{this.state.country}</p>
        {this.state.country.map((countries) => (
          <h2 key={countries}>{countries}</h2>
        ))}
        <button onClick={this.changeArray}>Change</button>
      
      </div>
    );
  }
}
export default Array;
