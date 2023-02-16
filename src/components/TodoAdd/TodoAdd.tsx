import { Button, Grid, Input } from "@chakra-ui/react";


const TodoAdd = () => {

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New Todo" />
      <Button>Add Todo</Button>
    </Grid>
  )

}


export default TodoAdd;
