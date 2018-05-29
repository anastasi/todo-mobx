import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

@inject('TodoList')
@observer
class List extends Component {
  render() {
    const {TodoList} = this.props

    return (
      <div className="List">
        <ul>{TodoList.lists.map(
            item => <li key={item.name}><input type="checkbox" ref={ input => this.todo = input} />{item.name}</li>
          )}</ul>
      </div>
    );
  }
}

export default List