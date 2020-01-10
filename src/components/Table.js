import React, {Component} from 'react'
import TableRow from './TableRow.js'

class Table extends Component{
    constructor(props){
	super(props)
	this.state = {
	    rows: props.rows,
	    cols: props.cols,
	    fillColor: props.fillColor
	}
    }
    render(){
	return (<tbody><TableRow /></tbody>);
    }
}

export default Table
