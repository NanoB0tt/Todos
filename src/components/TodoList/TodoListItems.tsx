import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { Todo, useStoreActions, useStoreState } from "../../stores/TodoStore";



const TodoListItems = () => {

  const todos = useStoreState((state) => state.todos);
  const checkDone = useStoreActions((actions) => actions.checkDone);
  const updateTodo = useStoreActions((actions) => actions.updateTodo);
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo);

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox isChecked={todo.done} onChange={() => checkDone(todo.id)} />
          <Input mx={2} value={todo.task} onChange={(e) => updateTodo({ id: todo.id, task: e.target.value })} />
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );

}

export default TodoListItems;
