import React, {Component} from 'react';
import './App.css';
import Cell from "./components/cell.js"
import TableRow from "./components/TableRow.js"

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
              <TableRow cols = {this.state.col}/>
            </tbody>
            </table>
            </div>

  }
}

export default App;
