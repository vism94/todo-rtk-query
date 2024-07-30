// src/components/pages/ToDoPage.tsx

import { Box, Button, Heading, Stack, Text, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useGetTodosQuery } from '../redux/apiSlice';
import OneToDo from '../ui/OneToDo';

export default function ToDoPage(): JSX.Element {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  const [filter, setFilter] = useState<string>('all');

  const handleFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
  };

  const filteredTodos = todos?.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'notDone') return !todo.done;
    return true;
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading todos</Text>;

  return (
    <Box mt={3}>
      <Heading as="h1" mb={5}>ToDo List</Heading>
      <Menu>
        <MenuButton as={Button} mr={3}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleFilterChange('all')}>All</MenuItem>
          <MenuItem onClick={() => handleFilterChange('done')}>Done</MenuItem>
          <MenuItem onClick={() => handleFilterChange('notDone')}>Not Done</MenuItem>
        </MenuList>
      </Menu>
      <Stack spacing={3} mt={5}>
        {filteredTodos && filteredTodos.map((todo) => (
          <OneToDo key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Box>
  );
}
