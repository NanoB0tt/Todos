import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";



const TodoListItems = () => {

  return (
    <>
      {[].map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox />
          <Input mx={2} value={todo.text} />
          <Button>Delete</Button>
        </Flex>
      ))}
    </>
  );

}

export default TodoListItems;
