import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'


const TodoItem = ({todo}) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

  return (
    <>
    <div className="input-group mb-3">
        <div class="input-group-text">
        <input className="form-check-input " type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
        </div>
        <input className='form-control' type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />
        <button className='btn btn-success' onClick={()=>{
            if (todo.completed) return ;
            if (isTodoEditable){
                editTodo()
            } else setIsTodoEditable((prev)=>!prev) 
        }} disabled={todo.completed}>{isTodoEditable ? "save" : "edit"}</button>
        <button className='btn btn-danger' onClick={ ()=>deleteTodo(todo.id)}>delete</button>
        </div>
    </>
  )
}

export default TodoItem