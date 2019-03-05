import uniqueKey from 'unique-key'
import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE} from '../actions'

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
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_COMPLETE:
            return{
                ...state,
                todos: state.todos.map((todo, idx) => {
                   if(idx === action.idx){
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