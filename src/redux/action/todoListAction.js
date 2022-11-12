import axios from "axios"
import {useNavigate} from "react-router-dom"
export const GET_TODO = "GET_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const FETCH_START = "FETCH_START"
export const ACTIVE_TODO = "ACTIVE_TODO"
export const COMPLETED_TODO = "COMPLETED_TODO"
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO"


function fetchStart(){
    return {
        type: FETCH_START
    }
}

function succesGetTodo(data){
    return{
        type: SUCCESS_GET_TODO,
        payload: data
    }
}

function hapus(data){
    return {
        type: DELETE_TODO,
        payload: data
    }
}

function tambahData(inputTodo) {
    return {
        type: ADD_TODO,
        payload: inputTodo
    }
}

function updateTodoList(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

function activeTodo(data) {
    return {
        type: ACTIVE_TODO,
        payload: data
    }
}

function completedTodo(data) {
    return {
        type: COMPLETED_TODO,
        payload: data
    }
}

export const getTodo = () => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList")
        dispatch(succesGetTodo(result.data))
        console.log(result.data);
    }
}

export const deleteTodo = (id) =>{
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.delete(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList/${id}`)
        dispatch(hapus(result.data))
    }
}

export const postTodo = (inputTodo) => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.post(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList`, 
        {name_todo: inputTodo, statusTodo: "completed"})
        dispatch(tambahData(result.data))
    }
}

export const updateTodo = (id, todo, selectStatus) => {
    // console.log(id, todo, selectStatus);
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.put(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList/${id}`,
        {name_todo: todo, statusTodo: selectStatus})
        // dispatch(updateTodoList(result.data))
        // console.log(result);
        dispatch(fetchStart)
    }
}

export const searchActiveTodo = (statusTodoList) => {
    console.log(statusTodoList);
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList`)
        const resultFix = result.data
        console.log(resultFix);

        const hasil = resultFix.filter((item) => 
            item.statusTodo.includes(statusTodoList)
        )
        // dispatch(activeTodo(hasil))  
        dispatch(succesGetTodo(hasil))
    }
}

export const searchCompletedTodo = (statusTodoList) => {
    console.log(statusTodoList);
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/TodoList`)
        const resultFix = result.data
        console.log(resultFix);

        const hasil = resultFix.filter((item) => 
            item.statusTodo.includes(statusTodoList)
        )
        dispatch(completedTodo(hasil))  
    }
}