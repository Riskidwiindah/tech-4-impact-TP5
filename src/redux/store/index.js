import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import todoListReducer from "../reducer/todoListReducer"

const allReducer = combineReducers({
    todo: todoListReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store