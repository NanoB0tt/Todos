import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { checkDone, deleteTodo, Todo, updateTodo } from "../../stores/slices/todoSlice";
import { RootState } from "../../stores/TodoStore";



const TodoListItems = () => {

  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox isChecked={todo.done} onChange={() => dispatch(checkDone(todo.id))} />
          <Input mx={2} value={todo.task} onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))} />
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
        </Flex>
      ))}
    </>
  );

}

export default TodoListItems;
