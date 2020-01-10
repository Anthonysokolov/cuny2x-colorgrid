import React, {Component} from 'react'
import './cell.css'


class Cell extends Component{
  constructor(props){
    super(props)
    this.state = {
      color:props.color+ "-cell"
    }
  }
  render(){
    return  <td className={this.state.color}></td>
  }
}

export default Cell
