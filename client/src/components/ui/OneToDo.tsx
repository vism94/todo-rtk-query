// src/components/ui/OneToDo.tsx

import { Box, Button, Checkbox, Text } from '@chakra-ui/react';
import React from 'react';
import { useDeleteTodoMutation, useToggleTodoMutation } from '../redux/apiSlice';
import type { TodoType } from '../../types/ToDoTypes';

type OneToDoProps = {
  todo: TodoType;
}

export default function OneToDo({ todo }: OneToDoProps): JSX.Element {
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2} borderWidth={1} borderRadius={5}>
      <Checkbox
        isChecked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      >
        <Text as={todo.done ? 'del' : undefined}>{todo.todo}</Text>
      </Checkbox>
      <Button colorScheme="red" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </Box>
  );
}
