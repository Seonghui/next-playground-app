"use client";

import { List, Skeleton } from "antd";

interface TodoListSkeletonProps {
  count?: number;
}

export function TodoListSkeleton({ count = 3 }: TodoListSkeletonProps) {
  const filledArray = new Array(count).fill(0);
  return (
    <List
      header={<Skeleton title={true} paragraph={{ rows: 0 }} />}
      bordered
      dataSource={filledArray}
      renderItem={(item) => (
        <List.Item>
          <Skeleton title={false} paragraph={{ rows: 1 }} />
        </List.Item>
      )}
    />
  );
}
