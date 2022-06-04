import React, {Component} from "react";

export default class Didmount extends Component {
  constructor() {
    super();
    this.state = {
      name: "constructor Data1",
      names: "constructor Data2",
      count : 0
    };
    console.log("constructor");
  }

  handleChange = () => {
    this.setState({
      name: "Data changed 2",
    });
  };

  handleReset = () => {
    this.setState({
      name: "Reset Data",
    });
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("componentDidMount");
      this.setState({
        name: "Component Did Mount Data 2",
        names: "Component Did Update data",
      });
    }, 5000);
  }
  handleAdd = () => {
    let count = this.state.count;
    this.setState({ count: count +=1 });
  }
  handleSub = () => {
    let count = this.state.count;
    this.setState({ count: count -=1 });
  };
  handlevalue = () => {
   
    this.setState({ count: 0 });
  }
  componentDidUpdate() {

    setTimeout(() => {
            document.getElementById("change").innerHTML = this.state.names;
      this.setState({
        names: "Component Did Updated data",
      });
    }, 5000);
    console.log("ComponentUpdate");
  }

  componentWillUnmount() {
    console.log("Component Will UnMount");
    alert("Life cycle ended successfully");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>LIFE CYCLE METHOD</h1>
        <p>{this.state.name}</p>
        <p>
          {this.state.names}
        </p>

        <button onClick={this.handleChange}>Change</button>
        <button onClick={this.handleReset}>Reset</button>
        <br/><br/>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
        <button onClick={this.handlevalue}>Reset</button>
        <p id="change">disapper</p>
      </div>
    );
  }
}
