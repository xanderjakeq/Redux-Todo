import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {X} from 'react-feather'

import {connect} from 'react-redux'
import {addTodo, deleteTodo, toggleComplete} from './actions'
import Todo from './components/Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newtodo: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.newtodo === '') {
      alert('what do you need to do today?')
      return
    }
    this.setState({
        newtodo: ''
      })
    this.props.addTodo(this.state.newtodo)
  }

  render() {
    return (
      <div className="App">
        <div>
            <form onSubmit = {this.handleSubmit}>
              <input type='text' name='newtodo' value = {this.state.newtodo} onChange = {this.handleChange}/>
            </form>
            <ul>
              {this.props.todos.map((todo, idx) => {
                return <Todo key = {todo.id} data = {todo} idx = {idx} toggleComplete = {this.props.toggleComplete} delete = {this.props.deleteTodo}/>
              })}
            </ul>
        </div>
            <button onClick = {this.handleSubmit}>add todo</button>
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

export default connect(mapStateToProps, {addTodo, deleteTodo, toggleComplete})(App);
