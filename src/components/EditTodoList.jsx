import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateTodo } from "../redux/action/todoListAction"

function EditTodoList (){
    const [todo, setTodo] = useState ("")
    const [selectStatus, setSelectStatus] = useState("")
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const {id} = useParams()

    const handleSaveEdit = (e) =>{
        e.preventDefault()
        dispatch(updateTodo(id, todo, selectStatus))
        alert("Data berhasil diperbaharui")
        navigation(`/`)
    }

    const handleCancelEdit = () =>{
        navigation(`/`)
    }

    return (
        <>
            <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title"><i className="fas fa-arrow-left" onClick={handleCancelEdit}></i> Edit Todo List</h5>
                </div>
                <div className="card-body">
                    <form className="mt-4">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your Todo" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                        <select className="form-select form-select-sm mt-3" value={selectStatus} onChange={(event) => setSelectStatus(event.target.value)}>
                            <option value=" ">Choose your option</option>
                            <option value="completed">Completed</option>
                            <option value="active">Active</option>
                        </select>

                        <div className="mt-5">
                            <button type="submit" className="btn btn-success me-3" onClick={handleSaveEdit}>Save</button>
                            <button type="reset" className="btn btn-secondary" onClick={handleCancelEdit}>Cencel</button>
                        </div>
                        
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default EditTodoList