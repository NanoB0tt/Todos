import { Button, Grid, Input } from "@chakra-ui/react";
import { UseTodoStore } from "../../stores/TodoStore";


const TodoAdd = () => {

  const { addTodo, addNewTodo, newTodo } = UseTodoStore();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3" mb="5">
      <Input placeholder="New Todo" onChange={(e) => addNewTodo(e.target.value)} value={newTodo} />
      <Button onClick={addTodo}>Add Todo</Button>
    </Grid>
  )

}


export default TodoAdd;
