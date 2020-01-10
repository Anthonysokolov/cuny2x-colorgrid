import React, {Component} from 'react'
import Cell from './cell.js'

class TableRow extends Component{
  constructor(props){
    super(props)
    this.state = {
      cols:["red","","red"]
    }
  }
  render(){
    return <tr>
              {this.state.cols.map((color) => {
                  return <Cell color={color}/>
              })
              }
           </tr>
  }
}

export default TableRow
