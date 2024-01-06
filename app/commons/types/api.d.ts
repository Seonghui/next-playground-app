interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoResponse {
  todos: Todo[];
}
