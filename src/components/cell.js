import React, {Component} from 'react'
import './cell.css'


class Cell extends Component{
  constructor(props){
    super(props)
    this.state = {
      cellColor:"white-cell",
      fillColor:props.fillColor + "-cell"
    }
  }
  fillCell = () => {
    this.setState({cellColor:this.state.fillColor})
  }
  render(){
    return  <td className={this.state.cellColor} onClick={this.fillCell}></td>
  }
}

export default Cell
