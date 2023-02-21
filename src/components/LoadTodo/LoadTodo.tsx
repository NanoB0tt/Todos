import { ChangeEvent, useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { nanoid } from "nanoid";
import { Todo, UseTodoStore } from "../../stores/TodoStore";


const LoadTodo = () => {

  const [active, setActive] = useState(false);
  const { loadTodo } = UseTodoStore((state) => ({ loadTodo: state.loadTodo }), shallow);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const result: Omit<Todo, "id">[] = JSON.parse(text);
      const todo = insertNanoId(result);
      loadTodo(todo);
    }
    if (e.target.files !== null) {
      reader.readAsText(e.target.files[0])
    }
  }

  const insertNanoId = (todos: Omit<Todo, "id">[]): Todo[] =>
    todos.map(todo => ({
      ...todo,
      id: nanoid()
    }));


  return (
    <>
      <Button onClick={() => setActive(!active)}>
        Load
      </Button>
      {active && <>
        <form onSubmit={(e) => {
          e.preventDefault();
          setActive(!active);
        }}>
          <Input width="sm" type="file" accept=".json" p="1" onChange={(e) => handleFile(e)} />
          <Button type="submit">Accept</Button>
        </form>
      </>
      }
    </>
  )
}


export default LoadTodo;
