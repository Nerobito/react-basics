import React, { Component } from "react";
import logo from "./assets/react.svg";
export class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="flex flex-col justify-center items-center gap-y-6 h-screen">
        <img src={logo} className="w-40 cursor-pointer" alt="Reset logo" />
        <button
          className="bg-red-800 text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Count is: {this.state.count}
        </button>
        <button
          className="bg-red-700  text-white"
          onClick={() => this.setState({ count: 0 })}
        >
          Set Zero
        </button>
      </div>
    );
  }
}

export default App;
