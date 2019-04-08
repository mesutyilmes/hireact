import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onClick(name) {
    
    console.log(name);
    console.log("=============");
  }
  render() {
    return (
      <div className="container">
        <h2>Basic Panel</h2>
        <div className="panel panel-default">
          <div className="panel-body" onClick={this.onClick.bind(this,"Test")}>A Basic Panel</div>
        </div>
      </div>
    );
  }
}

export default App;
