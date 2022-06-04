import React from "react";
import { Link } from "react-router-dom";
 class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Nirmal",
      name:"Nirmal"
    };
    console.log(1)
  }
  handleChange = () => {

    this.setState({
        name:"Nirmal Narayan"
    })
      };
  componentDidMount() {
    setTimeout(() => {
    this.setState({
      data: "Narayan",
    });
    console.log(2)
}, 2000)
  }

  render() {
    console.log(3)
    return (
      <>
        <h1>{this.state.data}</h1>
  
        <h2>Name:{this.state.name}</h2>
        <button onClick={this.handleChange}>Change</button><br/>
        <Link to="didmount"><button>Lifecycle</button></Link>
        <Link to="array"><button>Array</button></Link>
      </>
    );
  }
}

export default Mounting;