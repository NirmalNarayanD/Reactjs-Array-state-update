import React from "react";
import update from "react-addons-update";
class Addon extends React.Component {
  state = {
    country: ["India", "Pakistan", "Srilanka"],
  };

  changeArray = () => {
    let countries =this.state.country;
    countries[1]= update(countries[1],{$set:["swiss"]})
    this.setState({country:countries})
  };

  render() {
    return (
      <div>
        {this.state.country
        .map((countries) => (
          <h2 key={countries}>{countries}</h2>
        ))
        }
        <button onClick={this.changeArray}>Change</button>
      </div>
    );
  }
}

export default Addon;
