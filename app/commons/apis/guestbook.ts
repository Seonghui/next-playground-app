import { instance } from ".";

const guestbookService = {
  getGuestbooks: async (): Promise<GuestBookResponse[]> => {
    const { data } = await instance.get("/guestbook");
    console.log(data);
    return data;
  },
  updateGuestbookItem: async (todo: Todo): Promise<Todo> => {
    const { data } = await instance.put<Todo>(`/todos/${todo.id}`, todo);
    return data;
  },
  deleteGuestbookItem: async (id: string): Promise<Todo> => {
    const { data } = await instance.delete<Todo>(`/todos/${id}`);
    return data;
  },
  addGuestbookItem: async (message: string): Promise<Todo> => {
    const { data } = await instance.post<Todo>(`/todos`, {
      todo: message,
      completed: false,
    });
    return data;
  },
};

export default guestbookService;
