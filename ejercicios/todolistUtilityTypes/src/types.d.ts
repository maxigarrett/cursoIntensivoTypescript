export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

//UTILITY TYPES
export type TodoId = Pick<Todo, "id">;
