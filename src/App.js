import React, { Component } from 'react';
import './App.css';
import Home from "./View/Home/Home";
import About from "./View/About/About";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Home/>
            <About/>
        </div>

    );
  }
}



export default App;
