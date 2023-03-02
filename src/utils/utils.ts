import { nanoid } from "nanoid";
import { ChangeEvent } from "react";
import { Todo } from "../stores/TodoStore";


export const validateTodo = (str: string) => {

  const file = JSON.parse(str);

  if (Array.isArray(file)) {
    const validTodo = file.every(obj => obj.hasOwnProperty('task') && obj.hasOwnProperty('done'))
    return validTodo;
  } else {
    return false;
  }
}

export const insertNanoId = (todos: Omit<Todo, "id">[]): Todo[] =>
  todos.map(todo => ({
    ...todo,
    id: nanoid()
  }));

export const handleFile = (
  e: ChangeEvent<HTMLInputElement>,
  addTodoFromLoad: (todo: string) => void
) => {
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result as string;
    addTodoFromLoad(text);
  }
  if (e.target.files !== null) {
    reader.readAsText(e.target.files[0])
  }
}

export const makeTodoFromLoad = (text: string): Todo[] => {
  return insertNanoId(JSON.parse(text))
}
