import React, {Component} from 'react'
import TableRow from './TableRow.js'

class Table extends Component{
  constructor(props){
  	super(props)
  	this.state = {
  	    numRows: props.rows,
  	    numCols: props.cols,
        rows:[],
  	    fillColor: props.fillColor
  	}
  }
  componentDidMount(){
    this.fillRows()
  }
  fillRows = () => {
    let arr = []
    for(let i = 0; i < this.state.numRows; i++){
      arr.push(<TableRow numCols={this.state.numCols} fillColor={this.state.fillColor}/>)
    }
    this.setState({rows:arr})
  }
  render(){
    console.log(this.state.rows)
	    return <tbody>{this.state.rows.map(row => row)}</tbody>;
    }
}

export default Table
