import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ToggleLeft, ToggleRight} from 'react-feather'

import {connect} from 'react-redux'
import {addTodo, deleteTodo, toggleComplete} from './actions'
import Todo from './components/Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newtodo: '',
      showAll: false,
      completedTodos: []
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.todos !== this.props.todos){
      this.setState({
        completedTodos: this.props.todos.filter(todo => todo.isCompleted)
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleToggleAll  = () => {
    this.setState({
      showAll: !this.state.showAll
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
              <input placeholder = 'New Task' type='text' name='newtodo' value = {this.state.newtodo} onChange = {this.handleChange}/>
            </form>
            <ul>
              {this.state.showAll ? this.props.todos.map((todo, idx) => {
                return <Todo key = {todo.id} data = {todo} idx = {idx} toggleComplete = {this.props.toggleComplete} delete = {this.props.deleteTodo}/>
              }) : this.props.todos.filter(todo => !todo.isCompleted).map((todo, idx) => {
                return <Todo key = {todo.id} data = {todo} idx = {idx} toggleComplete = {this.props.toggleComplete} delete = {this.props.deleteTodo}/>
              })}
            </ul>
        </div>

        <div className = 'sideBar'>
          <button onClick = {this.handleSubmit} className = 'addButton'>add</button>
          <button onClick = {this.handleToggleAll} className = 'toggleDisplay'> {this.state.showAll ? <ToggleRight size = {30}/> : <ToggleLeft size = {30}/>} </button>
          <ul className = 'stats'>
            <li><p>{this.props.todos.filter(todo => !todo.isCompleted).length}</p></li>
            <li><p>{this.props.todos.filter(todo => todo.isCompleted).length}</p></li>
            <li><p>{this.props.todos.length}</p></li>
          </ul>
        </div>
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
