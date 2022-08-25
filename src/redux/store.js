import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'
import updateReducer from './reducers/updateReducer'
import { registerReducer } from "./reducers/registerReducer";


export const store = configureStore ({
    reducer: {
        userList: registerReducer,
        todos: todoReducer,
        update: updateReducer
    },
})