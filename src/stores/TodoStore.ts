import { nanoid } from "nanoid";
import { create } from "zustand";

export interface Todo {
  id: string;
  task: string;
  done: boolean;
}

type State = {
  todos: Todo[];
  newTodo: string;
  todosFromLoad: string;
}

type Actions = {
  addTodo: () => void;
  addNewTodo: (task: string) => void;
  checkDone: (id: string) => void;
  updateTodo: (id: string, task: string) => void;
  addTodoFromLoad: (todos: string) => void;
  loadTodo: (todos: Todo[]) => void;
  deleteTodo: (id: string) => void;
}

const addTodo = (todos: Todo[], task: string): Todo[] => [
  ...todos,
  {
    id: nanoid(),
    task,
    done: false
  },
];

const checkDone = (todos: Todo[], id: string): Todo[] =>
  todos.map(todo => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }));

const updateTodo = (todos: Todo[], id: string, task: string): Todo[] =>
  todos.map(todo => ({
    ...todo,
    task: todo.id === id ? task : todo.task
  }));

const loadTodo = (todos: Todo[], fileTodo: Todo[]): Todo[] => [
  ...todos,
  ...fileTodo
]

const deleteTodo = (todos: Todo[], id: string): Todo[] =>
  todos.filter(todo => todo.id !== id);


export const UseTodoStore = create<State & Actions>()((set) => ({
  todos: [],
  newTodo: "",
  todosFromLoad: "",
  addTodo() {
    set((state) => ({
      todos: state.newTodo ? addTodo(state.todos, state.newTodo) : state.todos,
      newTodo: ""
    }));
  },
  addNewTodo(text: string) {
    set(() => ({
      newTodo: text
    }));
  },
  checkDone(id: string) {
    set(state => ({
      todos: checkDone(state.todos, id)
    }));
  },
  updateTodo(id: string, task: string) {
    set(state => ({
      todos: updateTodo(state.todos, id, task)
    }));
  },
  addTodoFromLoad(todo: string) {
    set(() => ({
      todosFromLoad: todo
    }))
  },
  loadTodo(fileTodo: Todo[]) {
    set(state => ({
      todos: loadTodo(state.todos, fileTodo)
    }))
  },
  deleteTodo(id: string) {
    set(state => ({
      todos: deleteTodo(state.todos, id)
    }));
  }
}))

