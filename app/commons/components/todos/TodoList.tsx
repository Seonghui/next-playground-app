"use client";

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
import useGetTodos from "@/app/commons/hooks/useGetTodos";
import { Fragment, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import todosService from "../../apis/todos";
import { useRouter } from "next/navigation";
import { REACT_QUERY_KEY } from "../../constants";
import useMount from "../../hooks/useMount";
import { TodoListSkeleton } from "./TodoSkeleton";

export default function TodoList() {
  const { sortedTodos } = useGetTodos();
  const queryClient = useQueryClient();
  const mounted = useMount();
  const [value, setValue] = useState("");
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const reset = () => {
    setValue("");
    setEditItemId(null);
  };
  const handleClickEdit = (id: number) => {
    setEditItemId(id);
  };

  const editMutation = useMutation({
    mutationFn: todosService.updateTodoItem,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: [REACT_QUERY_KEY.todos] });
    },
  });

  const router = useRouter();
  if (!mounted) {
    return <TodoListSkeleton />;
  }
  return (
    <List
      header={<div>Todo List</div>}
      bordered
      dataSource={sortedTodos}
      renderItem={(item) => (
        <List.Item
          actions={
            editItemId
              ? [
                  <Button
                    key={item.id}
                    type="text"
                    onClick={() =>
                      editMutation.mutate({
                        ...item,
                        todo: !!value.length ? value : item.todo,
                      })
                    }
                  >
                    confirm
                  </Button>,
                  <Button key={item.id} type="text" onClick={() => reset()}>
                    cancel
                  </Button>,
                ]
              : [
                  <Button
                    key={item.id}
                    type="text"
                    onClick={() => handleClickEdit(item.id)}
                  >
                    edit
                  </Button>,
                  <Button
                    key={item.id}
                    type="text"
                    onClick={() => router.push(`/todos/${item.id}/delete`)}
                  >
                    delete
                  </Button>,
                ]
          }
        >
          <Flex justify="flex-start" style={{ width: "100%" }} gap={16}>
            <Checkbox
              defaultChecked={item.completed}
              onChange={() =>
                editMutation.mutate({ ...item, completed: !item.completed })
              }
            />{" "}
            {editItemId === item.id ? (
              <>
                <Input
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Basic usage"
                  style={{ display: "flex", alignItems: "center" }}
                  defaultValue={item.todo}
                />
              </>
            ) : (
              <>
                <div>
                  {/* <Typography.Text mark>[ITEM]</Typography.Text> */}
                  {item.todo}
                </div>
              </>
            )}
          </Flex>
        </List.Item>
      )}
    />
  );
}
