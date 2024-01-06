"use client";

import todosService from "@/app/commons/apis/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function Page(props: { params: { id: string } }) {
  console.log({ props });
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: todosService.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      router.back();
    },
  });
  const router = useRouter();
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        title="알림"
        open={true}
        onOk={() => deleteMutation.mutate(props.params.id)}
        onCancel={() => router.back()}
      >
        정말 삭제하시겠습니까?
      </Modal>
    </div>,
    document.getElementById("modal-root")!
  );
}
