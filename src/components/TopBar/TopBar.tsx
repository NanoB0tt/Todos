import { Box, Heading } from "@chakra-ui/react";
import LoadTodo from "../LoadTodo/LoadTodo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const TopBar = () => {

  return (
    <Box display={{ base: 'grid', sm: 'flex' }} gap="0.5rem">
      <Heading marginRight="auto">Todo List</Heading>
      <ThemeSwitcher />
      <LoadTodo />
    </Box>
  )

}

export default TopBar;
