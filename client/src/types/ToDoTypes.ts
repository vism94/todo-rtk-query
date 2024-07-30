// src/types/ToDoTypes.ts

export type TodoType = {
  id: number;
  todo: string;
  done: boolean;
};

export type TodoDataType = {
  todo: string;
  done: boolean;
};

export type ApiResponse = TodoType[];
