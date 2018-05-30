import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

@inject('TodoList')
@observer
class List extends Component {

  handleChange = e => {
    e.preventDefault();
    //this.props.TodoList.addList(this.todo.value);
    // this.props.TodoList.completeList(0)
  }
  render() {
    const {TodoList} = this.props

    return (
      <div className="List">
        <ul>{TodoList.lists.map(
            item => <li key={item.name}><input type="checkbox" onChange={this.handleChange} />{item.name}</li>
          )}</ul>
      </div>
    );
  }
}

export default List