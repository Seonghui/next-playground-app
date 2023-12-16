"use client";

import useGetTodos from "@/app/commons/hooks/useGetTodos";

export default function ClientPage() {
  const { data } = useGetTodos();
  return (
    <h1>
      <div> Hello, ClientPage</div>
      <ul>
        {data.todos?.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </h1>
  );
}
