import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

@inject('TodoList')
@observer
class List extends Component {

  handleChange = index => {
    this.props.TodoList.toggleCompleted(index)
  }
  render() {
    const {TodoList} = this.props

    return (
      <div className="List">
        <ul>{TodoList.lists.map(
            (item, index) => 
              <li key={item.name}>
               <input type="checkbox" onChange={ (e) => this.handleChange(index) } /> {item.name}
              </li>
          )}</ul>
      </div>
    );
  }
}

export default List