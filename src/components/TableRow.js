import React, {Component} from 'react'
import Cell from './cell.js'

class TableRow extends Component{
  constructor(props){
    super(props)
    var colArray = []
    for(let i = 0; i < props.cols; i++){
      colArray.push(i)
    }
    this.state = {
      cols:colArray,
      fillColor: props.fillColor
    }
  }
  render(){
    console.log(this.state.cols)
    return <tr>
              {this.state.cols.map((color) => {
                  return <Cell fillColor={this.state.fillColor}/>
              })
              }
           </tr>
  }
}

export default TableRow
