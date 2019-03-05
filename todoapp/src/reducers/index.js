import uniqueKey from 'unique-key'
import {ADD_TODO, DELETE_TODO} from '../actions'

const initialState = {
    todos: [
        {
            value: 'TODO Item',
            isCompleted: false,
            id: 'random Key'
        },
        {
            value: 'TODO Item',
            isCompleted: false,
            id: 'random Key 2'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {value: action.todo, isCompleted: false, id: uniqueKey(64, 'todo-')}]
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state
    }
}