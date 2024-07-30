// src/App.tsx

import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import ToDoPage from './components/pages/ToDoPage';
import AddToDo from './components/ui/AddToDo';

export default function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Container>
        <Box mt={5}>
          <AddToDo />
          <ToDoPage />
        </Box>
      </Container>
    </ChakraProvider>
  );
}
