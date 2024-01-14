"use client";
import authService from "@/app/commons/apis/auth";
import { LOCAL_STORAGE_KEY } from "@/app/commons/constants";
import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "@/app/commons/hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const { hasToken, clearToken, setToken } = useAuth();
  const registerMutation = useMutation({
    mutationFn: authService.loginUser,
    onSuccess: (data) => {
      if (hasToken) {
        clearToken();
      }
      setToken(data.accessToken);
      router.push("/client");
      router.refresh();
    },
  });

  const onFinish = (values: UserInput) => {
    console.log("Success:", values);
    registerMutation.mutate({ email: values.email, password: values.password });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </>
  );
}
