import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'
import updateReducer from './reducers/updateReducer'


export const store = configureStore ({
    reducer: {
        todos: todoReducer,
        update: updateReducer
    },
})