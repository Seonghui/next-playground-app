import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Button, Input, Space } from "antd";
import todosService from "../../apis/todos";
import { useState } from "react";

export default function NewTodoInput() {
  const queryClient = useQueryClient();
  const [value, setValue] = useState<string>("");
  const mutation = useMutation({
    mutationFn: todosService.addTodoItem,
    onSuccess: () => {
      setValue("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <>
      <Space.Compact style={{ width: "100%" }}>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
        <Button
          type="primary"
          onClick={() => {
            mutation.mutate(value);
          }}
        >
          Submit
        </Button>
      </Space.Compact>
    </>
  );
}
