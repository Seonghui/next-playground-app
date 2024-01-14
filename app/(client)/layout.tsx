"use client";
import Link from "next/link";
import {
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
import { usePathname, useRouter } from "next/navigation";
import NavLoginButton from "../commons/components/auth/NavLoginButton";

const { Header, Content, Footer, Sider } = AntdLayout;

const links = [
  { name: "client", href: "/client" },
  {
    name: "todos",
    href: "/todos",
  },
  { name: "guestbook", href: "/guestbook" },
  { name: "myPage", href: "/user/profile" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentKey = links.find((item) => item.href === pathname)?.name;
  const [current, setCurrent] = useState(currentKey);

  console.log(current);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = links.map((item) => {
    return {
      key: item.name,
      label: <Link href={item.href}>{item.name}</Link>,
    };
  });
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
          selectedKeys={[current ?? links[0].name]}
          theme="dark"
          mode="horizontal"
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
