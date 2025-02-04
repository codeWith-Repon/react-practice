# Redux-toolkit 

### store.js
### 1
```javascript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({})

```

### todoSlice.js
### 2

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Do something",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

```


### store.js
### 3
```javascript
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
```

## to send data use useDispatch()

useDispach() reducers ke use kore store er vitor change kore

## to get data use useSelctor() 

