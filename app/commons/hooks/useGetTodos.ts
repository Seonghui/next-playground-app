import { useSuspenseQuery } from "@tanstack/react-query";
import todosService from "../apis/todos";
import { REACT_QUERY_KEY } from "../constants";

export default function useGetTodos() {
  const query = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEY.todos],
    queryFn: todosService.getTodos,
  });

  const sortedTodos = query.data.sort((a, b) => b.id - a.id);
  return {
    ...query,
    sortedTodos,
  };
}
