import React, {Component} from 'react'
import Cell from './cell.js'

class TableRow extends Component{
    constructor(props){
	super(props)
	this.state = {
	    rows: props.rows,
	    cols: props.cols,
	    fillColor: props.fillColor
	}
    }

    addCells = () => {
	let colArr = [];
	for(let i = 0; i < this.state.cols; i++){
	    colArr.push("");
	}
	let result = colArr.map( () => (
		<Cell fillColor={this.state.fillColor}/>
	));
	console.log(result);
	return result;
    }
    
    render(){
	let rowArr = [];
	for(let i = 0; i < this.state.rows; i++){
	    rowArr.push("");
	}
	let result = rowArr.map( () => (
		<tr>{this.addCells()}</tr>
	));
	return result;
    }
}

export default TableRow
