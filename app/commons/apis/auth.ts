import { instance } from ".";

const authService = {
  addUser: async (user: UserInput) => {
    const { data } = await instance.post<RegisterUserResponse>(
      `/register`,
      user
    );
    return data;
  },
  loginUser: async (user: UserInput) => {
    const { data } = await instance.post<RegisterUserResponse>(`/login`, user);
    return data;
  },
};

export default authService;
