"use client";

import useGetTodos from "@/app/commons/hooks/useGetTodos";
import { Divider, List, Typography, Button, Checkbox } from "antd";

export default function ClientPage() {
  const { data } = useGetTodos();
  return (
    <h1>
      <div> Hello, TodoPage</div>
      <Button>Button</Button>
      <Divider orientation="left">Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data.todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-delete">delete</a>,
            ]}
          >
            <Checkbox defaultChecked={item.completed} />{" "}
            <Typography.Text mark>[ITEM]</Typography.Text> {item.todo}
          </List.Item>
        )}
      />
    </h1>
  );
}
