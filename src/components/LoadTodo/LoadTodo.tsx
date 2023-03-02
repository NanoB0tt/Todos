import { useDispatch, useSelector } from "react-redux";
import { loadTodo, addTodoFromLoad } from "../../stores/slices/todoSlice";
import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import { handleFile, makeTodoFromLoad, validateTodo } from "../../utils/utils";
import InvalidTodoAlert from "../InvalidTodoAlert/InvalidTodoAlert";
import { useState } from "react";
import { RootState } from "../../stores/TodoStore";


const LoadTodo = () => {

  const [active, setActive] = useState(false);
  const todosFromLoad = useSelector((state: RootState) => state.todo.todosFromLoad)
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: 'grid', sm: 'flex' }} width={["100%", "max"]} gap="0.5rem">
      <Button onClick={() => setActive(!active)} width="100%">
        Load
      </Button>
      <InvalidTodoAlert isOpen={isOpen} onClose={onClose} />
      {active && <>
        <form onSubmit={(e) => {
          e.preventDefault();
          setActive(!active);
          !validateTodo(todosFromLoad) && onOpen()
          validateTodo(todosFromLoad) && dispatch(loadTodo(makeTodoFromLoad(todosFromLoad)));
        }} style={{ display: 'flex', gap: '0.5rem' }}>
          <Input
            width={["100%", "max-content"]}
            type="file"
            accept=".json"
            p="1"
            onChange={(e) => {
              handleFile(e, dispatch)
            }}
          />
          <Button type="submit">Accept</Button>
        </form>
      </>
      }
    </Box>
  )
}


export default LoadTodo;
