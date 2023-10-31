import { useEffect, useState } from 'react'
// import "./App.css"
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import ModeSwitcher from './components/ModeSwitcher'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id === id ? todo : prevTodo
      )
    )
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prev, completed:!prevTodo.completed}: prevTodo))

  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(
    ()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]
  )
  

  return (
    <>
      <TodoProvider value={{todos,addTodo, deleteTodo, updateTodo, toggleComplete}}>
 
        <div className='container  mt-5 p-4 rounded shadow'>
          <div className='row d-flex justify-content-end'>
            <div className="col-1 ">
              <ModeSwitcher/>
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div className="col-7 ">
              <h4>To Do List</h4>
            </div>
          </div>
          <div className='row  m-4 d-flex justify-content-center'>
            {/* <div className='col-5 bg-secondary d-flex justify-content-center'> */}
              <TodoForm/>
            {/* </div>          */}
          </div>
          <div >
            <div className='row  d-flex justify-content-center'>
            <div className='  mt-3  col-8'>{todos.map((todo)=>(
          <div key={todo.id} >
            <TodoItem todo={todo}/>

          </div>
        ))}</div>
              
            </div>         
          </div>

        </div>
        
     

      </TodoProvider>
  
    </>
  )
}

export default App
