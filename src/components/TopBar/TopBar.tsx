import { Flex, Heading } from "@chakra-ui/react";
import LoadTodo from "../LoadTodo/LoadTodo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const TopBar = () => {

  return (
    <Flex justifyContent="flex-end" gap="4" mb="10">
      <Heading marginRight="auto">Todo List</Heading>
      <ThemeSwitcher />
      <LoadTodo />
    </Flex>
  )

}

export default TopBar;
