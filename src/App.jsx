import { Link, Route, Routes } from "react-router-dom"
import EditTodoList from "./components/EditTodoList"
import TodoList from "./components/TodoList"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<TodoList/>}/>
      <Route path="/edit/:id" element={<EditTodoList/>}/>
    </Routes>
    </>
  )
}

export default App
