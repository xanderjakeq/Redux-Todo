import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {X} from 'react-feather'

import {connect} from 'react-redux'
import {addTodo, deleteTodo} from './actions'

class App extends Component {
  constructor(props){
    super(props)

    
  }
  render() {
    return (
      <div className="App">
             {this.props.todos.map(todo => {
               return <p key = {todo.id}>{todo.value}</p>
             })}
             <button onClick = {() => this.props.addTodo('addtodo')}>Add Todo</button>
      </div>
    );
  }
}

//returned object properties goes to component props
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, deleteTodo})(App);
