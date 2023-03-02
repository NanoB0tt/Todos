import { Action, action, createStore, createTypedHooks } from "easy-peasy";
import { nanoid } from "nanoid";

export interface Todo {
  id: string;
  task: string;
  done: boolean;
}

export interface TodosModel {
  todos: Todo[];
  newTodo: string;
  todosFromLoad: string;
  addTodo: Action<TodosModel>;
  addNewTodo: Action<TodosModel, string>;
  checkDone: Action<TodosModel, string>;
  updateTodo: Action<TodosModel, Omit<Todo, "done">>;
  addTodoFromLoad: Action<TodosModel, string>;
  loadTodo: Action<TodosModel, Todo[]>;
  deleteTodo: Action<TodosModel, string>;
}

export const todoStore = createStore<TodosModel>({
  todos: [],
  newTodo: "",
  todosFromLoad: "",
  addTodo: action(state => {
    state.todos = [
      ...state.todos,
      {
        id: nanoid(),
        task: state.newTodo,
        done: false
      },
    ];
    state.newTodo = ""
  }),
  addNewTodo: action((state, payload) => {
    state.newTodo = payload
  }),
  checkDone: action((state, payload) => {
    state.todos = state.todos.map((todo) => ({
      ...todo,
      done: todo.id === payload ? !todo.done : todo.done
    }))
  }),
  updateTodo: action((state, payload) => {
    state.todos = state.todos.map((todo) => ({
      ...todo,
      task: todo.id === payload.id ? payload.task : todo.task
    }))
  }),
  addTodoFromLoad: action((state, payload) => {
    state.todosFromLoad = payload
  }),
  loadTodo: action((state, payload) => {
    state.todos = [
      ...state.todos,
      ...payload
    ]
  }),
  deleteTodo: action((state, payload) => {
    state.todos = state.todos.filter((todo) => todo.id !== payload)
  })
})

const typedHooks = createTypedHooks<TodosModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
