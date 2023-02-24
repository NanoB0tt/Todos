import { Button, Grid, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { addNewTodo, addTodo } from "../../stores/slices/todoSlice";
import { RootState } from "../../stores/TodoStore";


const TodoAdd = () => {

  const task = useSelector((state: RootState) => state.todo.newTodo)
  const dispatch = useDispatch()


  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3" mb="5">
      <Input placeholder="New Todo" onChange={(e) => dispatch(addNewTodo(e.target.value))} value={task} />
      <Button onClick={() => dispatch(addTodo())}>Add Todo</Button>
    </Grid>
  )

}


export default TodoAdd;
