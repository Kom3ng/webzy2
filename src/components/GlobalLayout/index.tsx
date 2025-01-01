import { faBook, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { App, Button, Layout, Menu, MenuProps, Popover, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useUserStore } from "../../hooks/user";
import Avatar from "antd/es/avatar/avatar";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { user, clearUser } = useUserStore();
  const { message } = App.useApp();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuItems: Required<MenuProps>["items"][number][] = [
    {
      label: "錯提本",
      icon: <FontAwesomeIcon icon={faBook} />,
      key: "book",
      onClick: () => navigate("/mistake"),
    },
    {
      label: "在線專欄",
      icon: <FontAwesomeIcon icon={faGlobe} />,
      key: "column",
      onClick: () => {
        if (!user) {
          message.warning("請先登錄！");
          return;
        }

        window.open(
          `http://sxz.school.zykj.org/navPage.html?apiHost=http://sxz.api.zykj.org&apiToken=${user.accessToken}&timeStamp=${Date.now()}`,
        );
      },
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="flex items-center justify-between"
        style={{
          backgroundColor: colorBgContainer,
        }}
      >
        <div className="flex items-center">
          <Link to="/" className="font-bold">
            WebZy
          </Link>
          <Menu
            mode="horizontal"
            style={{
              flex: 1,
              backgroundColor: colorBgContainer,
            }}
            items={menuItems}
          ></Menu>
        </div>
        <div>
          {user && (
            <Popover
              title={user.name}
              content={
                <Button
                  onClick={() => {
                    clearUser();
                    message.success("成功登出");
                  }}
                  danger
                  type="text"
                >
                  登出
                </Button>
              }
            >
              <Avatar src={user.photo} alt={user.name} />
            </Popover>
          )}

          {!user && (
            <Link
              to={`/login?from=${window.location.pathname + window.location.search}`}
            >
              登錄
            </Link>
          )}
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </Layout>
  );
}
