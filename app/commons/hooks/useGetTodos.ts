import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import todosService from "../apis/todos";

export default function useGetTodos() {
  const query = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: todosService.getTodos,
  });

  const sortedTodos = query.data.sort((a, b) => b.id - a.id);
  console.log({ query });
  return {
    ...query,
    sortedTodos,
  };
}
