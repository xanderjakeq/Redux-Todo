import uniqueKey from 'unique-key'
import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE} from '../actions'

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [{value: action.todo, isCompleted: false, id: uniqueKey(64, 'todo-')}, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_COMPLETE:
            return{
                ...state,
                todos: state.todos.map((todo, idx) => {
                   if(todo.id === action.id){
                       return {
                           ...todo,
                           isCompleted: !todo.isCompleted
                       }
                   }else{
                       return todo
                   }
                })
            }
        default:
            return state
    }
}