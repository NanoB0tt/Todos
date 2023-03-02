import { useState } from "react";
import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { UseTodoStore } from "../../stores/TodoStore";
import { handleFile, makeTodoFromLoad, validateTodo } from "../../utils/utils";
import InvalidTodoAlert from "../InvalidTodoAlert/InvalidTodoAlert";


const LoadTodo = () => {

  const [active, setActive] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loadTodo, addTodoFromLoad, todosFromLoad } = UseTodoStore(
    (state) => ({
      loadTodo: state.loadTodo,
      addTodoFromLoad: state.addTodoFromLoad,
      todosFromLoad: state.todosFromLoad
    }), shallow
  );

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
          validateTodo(todosFromLoad) && loadTodo(makeTodoFromLoad(todosFromLoad));
        }} style={{ display: 'flex', gap: '0.5rem' }}>
          <Input
            width={["100%", "max-content"]}
            type="file"
            accept=".json"
            p="1"
            onChange={(e) => {
              handleFile(e, addTodoFromLoad)
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
