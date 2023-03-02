import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Todo {
  id: string;
  task: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
  newTodo: string;
  todosFromLoad: string;
}

const initialState: TodoState = {
  todos: [],
  newTodo: "",
  todosFromLoad: ""
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state) => {
      if (state.newTodo) {
        state.todos = [
          ...state.todos,
          {
            id: nanoid(),
            task: state.newTodo,
            done: false
          }
        ],
          state.newTodo = ""
      }
    },
    addNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload
    },
    checkDone: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => ({
        ...todo,
        done: todo.id === action.payload ? !todo.done : todo.done
      }))
    },
    updateTodo: {
      reducer: (state, action: PayloadAction<Omit<Todo, "done">>) => {
        state.todos = state.todos.map(todo => ({
          ...todo,
          task: todo.id === action.payload.id ? action.payload.task : todo.task
        }))
      },
      prepare: (id: string, task: string) => {
        return { payload: { id, task } }
      }
    },
    addTodoFromLoad: (state, action: PayloadAction<string>) => {
      state.todosFromLoad = action.payload
    },
    loadTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = [
        ...state.todos,
        ...action.payload
      ]
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
});


// Actions creators are generated for each case reducer function
export const { addTodo, addNewTodo, checkDone, updateTodo, addTodoFromLoad, loadTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
