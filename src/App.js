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
      fillColor:"red"
    }
  }
  selectColor = () => {

  }
  addRow = () => {
    this.setState({rows:this.state.rows+1})
  }
  addCol = () => {
    this.setState({cols:this.state.cols+1})
  }
  render(){
    let rowArr = []
    for(let i = 0; i < this.state.rows; i++){
      rowArr.push(i)
    }
    return  <div>
            <div id="dropdown">
              <select id="color" >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
              </select>
            </div>
            <div>
              <button onClick={this.addRow}>Add Row</button>
              <button onClick={this.addCol}>Add Column</button>
            </div>
            <table id="main-grid" align="center">
            <tbody>
              {rowArr.map(() => {
                return <TableRow cols={this.state.cols} fillColor={this.state.fillColor}/>
              })}
            </tbody>
            </table>
            </div>

  }
}

export default App;
