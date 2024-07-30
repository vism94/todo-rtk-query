// src/components/ui/AddToDo.tsx

import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAddTodoMutation } from '../redux/apiSlice';
import type { TodoDataType } from '../../types/ToDoTypes';

export default function AddToDo(): JSX.Element {
  const [newTodo, setNewTodo] = useState<string>('');
  const [addTodo] = useAddTodoMutation();

  const handleAddTodo = async (): Promise<void> => {
    if (newTodo.trim()) {
      await addTodo({ todo: newTodo, done: false } as TodoDataType);
      setNewTodo('');
    }
  };

  return (
    <Box mt={3}>
      <Stack direction="row" spacing={3}>
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New ToDo"
        />
        <Button onClick={handleAddTodo} colorScheme="blue">
          Add
        </Button>
      </Stack>
    </Box>
  );
}
