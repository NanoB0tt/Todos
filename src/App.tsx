import TodoAdd from "./components/TodoAdd/TodoAdd"
import { Box } from "@chakra-ui/react";
import TodoList from "./components/TodoList/TodoList";
import TopBar from "./components/TopBar/TopBar";

const App = () => {

  return (
    <Box maxWidth="5xl" maxHeight="100vh" margin="auto" p={5}>
      <TopBar />
      <TodoAdd />
      <TodoList />
    </Box>
  )
}

export default App;
