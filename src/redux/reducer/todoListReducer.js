import {ACTIVE_TODO, ADD_TODO, COMPLETED_TODO, DELETE_TODO, FETCH_START, SUCCESS_GET_TODO, UPDATE_TODO } from "../action/todoListAction"

const initialState = {
    todos: [{
        id: "8",
        isDone: false,
        name_todo: "ketemuan sama pacar",
        statusTodo: "active"
    }],
    // statusList: [],
    isLoading : false,
    // deleteProduct: null,
    err: null
}

const todoListReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_GET_TODO:
            return {
               ...state,
               todos: action.payload,
               isLoading: false 
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: action.payload,
                isLoading: false
            }
        case ADD_TODO:
            return {
                todos: [action.payload, ...state.todos],
                isLoading: false
            }
        case UPDATE_TODO:
            return {
                todos: action.payload,
                isLoading: false
            }
        case ACTIVE_TODO:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            }
        case COMPLETED_TODO:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            }
        default: 
        return state
    }
}

export default todoListReducer