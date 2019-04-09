import React, { Component } from 'react';
import './App.css';
import http from 'axios';


window.apiUrl = 'http://5cac37c8c85e05001452f0b9.mockapi.io/yilmes/test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '', arr: ["Mesut"], data: ["helo"]
    }
    this.changeInput = this.changeInput.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  onClick(name) {

    console.log(name);
    console.log("=============");
  }
  addItem(e) {
    console.log("tiklandi");
    var newArray = this.state.arr.slice();
    newArray.push(e.target.value);
    this.setState({ arr: newArray })
  }
  changeInput(e) {
    const test = e.target.value
    if (test === "mesut") {
      console.log("Doğru");
    }
    else {
      console.log("Yanlış");
    }
    this.setState({
      text: test
    })
  }
  componentDidMount() {
    http.get(window.apiUrl).then(res => {
      this.setState({
        data: res.data
      })
    })


  }
  render() {
    return (
      <div className="container">
        <h1>Form</h1>
        <form>
          <input type="text"
            value={this.state.text}
            onChange={this.changeInput}
          />
          <input type="button" value="Click me" onClick={this.addItem} />
          <p>{this.state.text}</p>

        </form>
        {
          this.state.data.map(item => {
            return (

              <div>
                <img src={item.avatar} alt={item.name}/>
                <p>{item.id}  {item.name}</p>
              </div>
            )
          })}
      </div>
    );
  }
}

export default App;
