import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  const [todoToEdit, setTodoToEdit] = useState(null)

  return (
    <>
      <h1 className='text-3xl text-green-600 '>Learn about Redux toolkit</h1>
      <AddTodo todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit}/>
      <Todos todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit}/>
    </>
  )
}

export default App
