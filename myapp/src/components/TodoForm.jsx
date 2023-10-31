import React, { useState} from 'react'
import { useTodo}from '../context'

const TodoForm = () => {

    const [todo, setTodo]=useState()

    const {addTodo}=useTodo()
    const add=(e)=>{
        e.preventDefault()
        if (!todo) return 
        addTodo({todo, completed:false})
        setTodo("")
    }

  return (
    <>
        <form onSubmit={add} className='col-8'>
            <div class="input-group mb-3"> 
           
            <input className="form-control" type=" text"placeholder='add to do here' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button className="btn btn-secondary" type="submit" >Add</button>
            </div>
        </form>
    
    
    
    </>
  )
}

export default TodoForm