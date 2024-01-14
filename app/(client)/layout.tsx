"use client";
import Link from "next/link";
import {
  Breadcrumb,
  Layout as AntdLayout,
  Menu,
  MenuProps,
  theme,
  Row,
  Col,
  Space,
  Button,
} from "antd";
import { useState } from "react";
import useAuth from "../commons/hooks/useAuth";
import { LOCAL_STORAGE_KEY } from "../commons/constants";
import { usePathname, useRouter } from "next/navigation";
import NavLoginButton from "../commons/components/auth/NavLoginButton";

const { Header, Content, Footer, Sider } = AntdLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname.replace("/", ""));
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items: MenuProps["items"] = [
    {
      key: "client",
      label: <Link href={`/client`}>Main</Link>,
    },
    {
      key: "todos",
      label: <Link href={`/todos`}>Todo List</Link>,
    },
    {
      key: "guestbook",
      label: <Link href={`/guestbook`}>Guestbook</Link>,
    },
    {
      key: "myPage",
      label: <Link href={`/user/profile`}>My Page</Link>,
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="demo-logo" />
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Row justify="end" style={{ marginRight: "16px" }}>
          <Col>
            <Space>
              <NavLoginButton />
            </Space>
          </Col>
        </Row>
      </Header>

      <Content style={{ margin: "24px 16px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </AntdLayout>
  );
}
