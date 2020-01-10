import React, {Component} from 'react'
import Cell from './cell.js'

class TableRow extends Component{
    constructor(props){
    	super(props)
    	this.state = {
    	    numCols: props.numCols,
          cells:[],
    	    fillColor: props.fillColor
    	}
    }
    componentDidMount(){
      this.addCells()
    }
    addCells = () => {
    	let arr = [];
    	for(let i = 0; i < this.state.numCols; i++){
          arr.push(<Cell fillColor={this.state.fillColor}/>)
    	}
    	this.setState({cells:arr})
    }
    render(){
    	return <tr>{this.state.cells.map(cell => cell)}</tr>
    }
}

export default TableRow
