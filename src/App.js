import React, { Component } from 'react';
import './App.css';
import http from 'axios';


window.apiUrl = '//5cac37c8c85e05001452f0b9.mockapi.io/yilmes/test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '', arr: [], data: []
    }
    this.changeInput = this.changeInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.clickPic = this.clickPic.bind(this)
  }
  clickPic(name) {
    console.log(name);
    var newArray = this.state.arr.slice();
    newArray.push(name);
    this.setState({ arr: newArray })
  }
  onClick(name) {

    console.log(name);
    console.log("=============");
  }
  addItem(e) {
    var newArray = this.state.arr.slice();
    newArray.push(this.state.text);
    this.setState({ arr: newArray })

    //post
    const newTodo = {
      name: this.state.text,
      alan : "Production"
    }
    http.post(window.apiUrl, newTodo).then(res => {
      if (res.status === 201) {
        this.setState({
          text: ''
        })
        console.log("frfr");


        this.setState({
          data: this.state.data.concat(res.data)
        })

      }
      //this.fromInput.removeAttribute('disabled')
    })


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
        <br /><br /><br /><br />
        <p>test</p>
        <h3>Aşağıdaki Metin Alanına Ekleyin ve Listeyi Güncelleyin</h3>
        <p>Veri Sayısı : {this.state.data.length}</p>
        <form action={this.addItem}>
          <input type="text"
            value={this.state.text}
            onChange={this.changeInput}
          />
          <input type="button" value="Click me" onClick={this.addItem} />


        </form>
        <br /><br /><br /><br />
        {
          this.state.data.map(item => {
            return (

              <div>
                
                <img onClick={this.clickPic.bind(this, item.name)} src={item.avatar} alt={item.name} />
                <p>{item.id}  {item.name}</p>
              </div>
            )
          })}
      </div>
    );
  }
}

export default App;
