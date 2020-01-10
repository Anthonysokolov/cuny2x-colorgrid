import React, {Component} from 'react'
import Cell from './cell.js'

class TableRow extends Component{
    constructor(props){
    	super(props)
    }
    addCells = () => {
    	let arr = [];
    	for(let i = 0; i < this.props.numCols; i++){
          arr.push(<Cell fillColor={this.props.fillColor}/>)
    	}
    	return arr
    }
    render(){
    	return <tr>{this.addCells()}</tr>
    }
}

export default TableRow
