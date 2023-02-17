import { Box } from "@chakra-ui/react";
import TodoListItems from "./TodoListItems";


const TodoList = () => {

  return (
    <>
      <Box height="sm" overflow="scroll" pr="2">
        <TodoListItems />
      </Box>
    </>
  )

}


export default TodoList;
