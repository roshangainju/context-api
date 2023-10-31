import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}
//aba arko component ma context lai use garda use context import garnu pardiana, useTodo matra import garyo vane todocontext ma vako sabai data ra function haru ko access auncha

export const TodoProvider = TodoContext.Provider
//yehi bata provider add garyo bhane pachi ko ma .provider rakhirakhnu pardaina sidai todoprovider lekhe pugcha
