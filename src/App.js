import React, { Component } from 'react'
import './App.css'
import {inject, observer} from 'mobx-react'
import List from './List/List';

@inject('TodoList')
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.TodoList.addList(this.todo.value);
    e.target.reset();
  }
  render() {
    const {TodoList} = this.props

    return (
      <div className="App">
         <h2>
           You have {TodoList.listCount} todo!
           <form onSubmit={ this.handleSubmit }>
            <input type="text" placeholder="New todo" ref={ input => this.todo = input} />
            <button>Add</button>
           </form>
         </h2>
        <List />
      </div>
    );
  }
}

export default App;
