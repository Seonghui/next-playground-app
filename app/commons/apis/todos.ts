import { instance } from ".";

const todosService = {
  getTodos: async (): Promise<Todo[]> => {
    const { data } = await instance.get("/todos");
    return data;
  },
  updateTodoItem: async (todo: Todo): Promise<Todo> => {
    const { data } = await instance.put<Todo>(`/todos/${todo.id}`, todo);
    return data;
  },
  deleteTodo: async (todo: Todo): Promise<Todo> => {
    const { data } = await instance.delete<Todo>(`/todos/${todo.id}`);
    return data;
  },
  addTodoItem: async (message: string): Promise<Todo> => {
    const { data } = await instance.post<Todo>(`/todos`, {
      todo: message,
      completed: false,
    });
    return data;
  },
};

export default todosService;
