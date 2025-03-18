import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // imp ---> 
        // state -- current state milti hai
        // action -- jo bhi data pass ho raha hai 
        addTodo: (state, action) => {
            const todo = {
                // id: Date.now() --- prev we use this but now new method
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },
        // updateTodo: (state, action) => {
        //     state.id = state.id.map( (todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        // },

    }
}) 

export const {addTodo, removeTodo, } = todoSlice.actions

export default todoSlice.reducer