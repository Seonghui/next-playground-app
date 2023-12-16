import { instance } from ".";

const todosService = {
  getTodos: (): Promise<TodoResponse> => {
    return instance.get("/todos").then((response) => {
      return response.data;
    });
  },
};

export default todosService;
