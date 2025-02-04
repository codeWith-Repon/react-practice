import React, { useState } from 'react'
import { useDispatch, useSelector} from "react-redux"
import {addTodo, removeTodo, updateTodo} from '../feature/todo/todoSlice'
import { FilePenLine, Save, Trash2 } from 'lucide-react'


const Todos = ({todoToEdit,setTodoToEdit }) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todoToEdit)

    // const handleSave = (todo) => {
    //   if (todoToEdit) {
    //      dispatch(updateTodo({id: todoToEdit.id, text: todoToEdit.text}))
    //     setTodoToEdit(null) 
    // }
    // }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>
            <div className="button flex gap-1.5">
            <button
              onClick={() => {
                if(todoToEdit && todoToEdit.id === todo.id){
                  setTodoToEdit(null)
                } else{
                  setTodoToEdit(todo)
                }
                
              }}
              className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-300 rounded text-md"
            >
            
             {todoToEdit && todoToEdit.id === todo.id ? <Save /> : <FilePenLine />}
            
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
             <Trash2 />
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos