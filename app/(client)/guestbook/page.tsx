"use client";

import guestbookService from "@/app/commons/apis/guestbook";
import { REACT_QUERY_KEY } from "@/app/commons/constants";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Card, Space } from "antd";

export default function Page() {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEY.guestbook],
    queryFn: guestbookService.getGuestbooks,
  });

  console.log(query.data);

  return (
    <>
      {query?.data?.map((item, id) => {
        return (
          <Space direction="vertical" size={16} key={id}>
            <Card
              size="small"
              title={item.title}
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              {item.content}
            </Card>
          </Space>
        );
      })}
    </>
  );
}
