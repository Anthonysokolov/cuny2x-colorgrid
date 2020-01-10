import React, {Component} from 'react';
import './App.css';
import Cell from "./components/cell.js"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      rows:2,
      cols:2,
      color:"red"
    }
  }
  selectColor = () => {

  }
  render(){
    return  <div>
            <div id="dropdown">
              <select id="color" >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
              </select>
            </div>
            <table id="main-grid" align="center">
            <tbody>
              <tr>
                  <Cell color = "red"/>
              </tr>
            </tbody>
            </table>
            </div>

  }
}

export default App;
