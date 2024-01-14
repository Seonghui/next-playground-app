interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoResponse {
  todos: Todo[];
}

interface UserInput {
  email?: string;
  password?: string;
  //   remember?: string;
}

interface User {
  id: number;
  email: string;
}

interface RegisterUserResponse extends User {
  accessToken: string;
}

interface GuestBookResponse {
  userId: number;
  title: string;
  content: string;
}
