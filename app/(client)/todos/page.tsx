"use client";

import todosService from "@/app/commons/apis/todos";
import NewTodoInput from "@/app/commons/components/todos/NewTodoInput";
import TodoList from "@/app/commons/components/todos/TodoList";
import { TodoListSkeleton } from "@/app/commons/components/todos/TodoSkeleton";
import { REACT_QUERY_KEY } from "@/app/commons/constants";
import useGetTodos from "@/app/commons/hooks/useGetTodos";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import {
  Divider,
  List,
  Typography,
  Button,
  Checkbox,
  Input,
  Flex,
  Space,
  Skeleton,
} from "antd";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

export default function ClientPage() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <NewTodoInput />
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoList />
      </Suspense>
    </Space>
  );
}
