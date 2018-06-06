import React, { Component } from 'react';
import './App.css';
import {inject, observer} from 'mobx-react';
import List from './List/List';
import Wrapper from './Wrapper.css';
import { Button, Form, FormGroup, Label, FormText, Jumbotron, Container, Row, Col } from 'reactstrap';

@inject('TodoList')
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.todo.value && this.todo.value.length > 0){
      this.props.TodoList.addList(this.todo.value);
    }
    e.target.reset();
  }
  
  render() {
    const {TodoList} = this.props

    return (
      <Jumbotron className="FullHeight">
      <div className="App">
        <div className="Wrapper">
          <h2>Todo List</h2>
        
          <Form onSubmit={ this.handleSubmit }>
            <input className="FormInput form-control" type="text" placeholder="Add a to-do..." ref={ input => this.todo = input} />
            <Button className="FormButton" color="info">Add</Button>
          </Form>
          
          <List />

          <Container>
            <Row className="StatusSpace">
              <Col lg="6">
                <p className="Status">You have {TodoList.listCount} todo!</p>
              </Col>
              <Col lg="6">
                <p className="Status">You have {TodoList.completedCount} completed tasks!</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      </Jumbotron>
    );
  }
}

export default App;
