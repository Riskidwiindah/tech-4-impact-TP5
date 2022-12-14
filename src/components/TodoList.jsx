import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {deleteTodo, getTodo, postTodo, searchActiveTodo, searchCompletedTodo } from '../redux/action/todoListAction'
import './TodoListStyle.css'

function TodoList() {
    const [todo, setTodo] = useState("")
    const [searchActive, setSearchActive] = useState("")
    const [searchCompleted, setSearchCompleted] = useState("")
    const navigation = useNavigate()

    const dispatch = useDispatch()
    const {todos, isLoading} = useSelector((state) => state.todo )
    console.log(todos);
    console.log(isLoading);

    //Fungsi untuk tambah data
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(postTodo(todo))
        setTodo(" ")
    }

    //Fungsi buat mengakses halaman edit
    const handleEdit = (id) => {
        navigation(`/edit/${id}`)
    }

    //Fungsi Untuk menghapus data Todo
    const delete_Todo = (id) =>{
        let text = "Apakah anda yakin untuk menghapusnya?"
        if (confirm(text) == true) {
            dispatch(deleteTodo(id))
        }else{
            alert("Action Cenceled")
        }
    }

    //menampilkan Todo List yang masih berstatus active
    const handleActiveData = () => {
        setSearchActive("active")
        dispatch(searchActiveTodo(searchActive))
    }

    const handleCompletedData = () => {
        setSearchCompleted("completed")
        dispatch(searchCompletedTodo(searchCompleted))
    }

    const handleAllData = () => {
        dispatch(getTodo())
    }
    //Menampilkan semua data todo
    useEffect(() => {
        dispatch(getTodo())
    },[])

    

    return(
        <>
        <div className="container-fluid">
            <div className="box-todolist mt-4">
                <h3>What's the plan for today?</h3>
                <form className="d-flex align-items-center mt-5" onSubmit={handleSubmit}>
                    <input className="form-control form-control-sm w-50 h-50 me-3" type="text" placeholder="What to do" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            
                <div className="d-flex mt-5" id='squad-button'>
                    <button className="btn rounded-pill me-3" onClick={handleAllData}>ALL</button>
                    <button className="btn rounded-pill me-3" onClick={handleActiveData}>ACTIVE</button>
                    <button className="btn rounded-pill" onClick={handleCompletedData}>COMPLETED</button>
                </div>
                    
               
                    {isLoading ?(
                        <span>Loading...</span>
                    ) : (
                        todos.map((item) =>
                            <div className='box-list d-flex justify-content-center align-items-center' key={item.id}>
                                <h5 className='me-5'><i className="fad fa-check-square"></i> {item.name_todo}</h5>
                                <button type='submit' className='btn btn-warning me-3'onClick={() => handleEdit(item.id)}><i className="fad fa-edit" ></i> Edit</button>
                                <button type='submit' className='btn btn-danger' onClick={() => delete_Todo(item.id)}><i className="fad fa-trash"></i> Delete</button>
                            </div>
                        )
                        // <h1>S</h1>
                    )}
                
                {/* <h5><i class="far fa-square"></i> Buy Egg</h5> */}
                
            </div>
        </div>
        </>
    )
}

export default TodoList