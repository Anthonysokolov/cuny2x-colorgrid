import React, {Component} from 'react';
import './App.css';
import Table from "./components/Table.js"

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
	           <Table rows={this.state.rows} cols={this.state.cols} fillColor={this.state.fillColor}/>
	    </table>

	</div>

    }
}

export default App;
