import React, {Component} from 'react'
import TableRow from './TableRow.js'

class Table extends Component{
  constructor(props){
  	super(props)
  }
  fillRows = () => {
    let arr = []
    for(let i = 0; i < this.props.numRows; i++){
      arr.push(<TableRow numCols={this.props.numCols} fillColor={this.props.fillColor}/>)
    }
    return arr
  }
  render(){
	    return <table align="center"><tbody>{this.fillRows()}</tbody></table>;
    }
}

export default Table
