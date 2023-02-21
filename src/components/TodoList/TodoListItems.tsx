import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { Todo, UseTodoStore } from "../../stores/TodoStore";



const TodoListItems = () => {

  const { todos, deleteTodo, checkDone, updateTodo } = UseTodoStore(
    (state) => ({
      todos: state.todos,
      deleteTodo: state.deleteTodo,
      checkDone: state.checkDone,
      updateTodo: state.updateTodo
    }), shallow
  );

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox isChecked={todo.done} onChange={() => checkDone(todo.id)} />
          <Input mx={2} value={todo.task} onChange={(e) => updateTodo(todo.id, e.target.value)} />
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );

}

export default TodoListItems;
