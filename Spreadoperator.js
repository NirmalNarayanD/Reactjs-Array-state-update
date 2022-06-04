import React from 'react'

class Spreadoperator extends React.Component {
    constructor() {
        super();
        this.state = {
          country: ["India", "Pakistan", "SriLanka"],
        };
   
      }
      
      changeArray = () => {
        let countries = [...this.state.country]
        countries[1] = "China"
this.setState({country:countries})
    
      };
      render() {
        return (
          <div>
            {this.state.country.map((countries) => (
              <h2 key={countries}>{countries}</h2>
            ))}
            <button onClick={this.changeArray}>Change</button>
          </div>
        );
      }
}
export default Spreadoperator;