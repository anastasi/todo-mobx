import React, { Component } from 'react'
import './App.css'
import {inject, observer} from 'mobx-react'

@inject('TodoList')
class App extends Component {
  render() {
    const {TodoList} = this.props

    return (
      <div className="App">
         <h2>
           You have {TodoList.listCount} todo!
         </h2>
      </div>
    );
  }
}

export default App;
