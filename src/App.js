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
  selectColor = (event) => {
     this.setState({fillColor:event.target.value})
  }
  addRow = () => {
     this.setState({rows:this.state.rows+1})
  }
  addCol = () => {
     this.setState({cols:this.state.cols+1})
  }
    removeRow = () => {
	this.setState({rows:this.state.rows-1})
    }
      removeCol = () => {
     this.setState({cols:this.state.cols-1})
      }
    clear = () => {
  }

  render(){
	return  <div>
            <div id="dropdown">
              <select id="color" onChange={this.selectColor}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div id="button_features">
              <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.addCol}>Add Column</button>
	  <button onClick={this.removeRow}>Remove Row</button>
	  <button onClick={this.removeCol}>Remove Column</button>
	  <button>Fill Uncolored</button>
	  <button>Fill All</button>
	  <button onClick={this.clear}>Clear All</button>
      </div>
	           <Table numRows={this.state.rows} numCols={this.state.cols} fillColor={this.state.fillColor}/>
	          </div>

    }
}

export default App;
