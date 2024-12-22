import { App, Button, Card, Form, FormProps, Input } from "antd";
import { manageApi, updateToken } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUserStore } from "../../hooks/user";
import { useNavigate, useSearchParams } from "react-router";
import Spinner from "../../components/Spinner";

type FieldType = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const { setUser } = useUserStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    const { username, password } = values;

    try {
      const resp1 = await manageApi.login({
        loginRequest: {
          userName: username,
          password: password,
          clientType: 1,
        },
      });
      if (!resp1.success) {
        message.error(resp1.error?.message);
        return;
      }
      const auth = resp1.result!;
      updateToken(auth!.accessToken!);
      const resp2 = await manageApi.getInfo();
      if (!resp2.success) {
        message.error(resp2.error?.message);
        return;
      }
      const user = resp2.result!;
      const now = new Date();
      setUser({
        name: user.realName!,
        id: user.id!,
        photo: user.photo!,
        accessToken: auth.accessToken!,
        refreshToken: auth.refreshToken!,
        tokenExpiresDate: new Date(
          now.getTime() + auth.expireInSeconds! * 1000,
        ),
        refreshTokenExpiresDate: new Date(
          now.getTime() + auth.refreshExpireInSeconds! * 1000,
        ),
      });
      message.success("登錄成功！");
      navigate(searchParams.get("from") || "/");
    } catch (e) {
      message.error("發生了錯誤<" + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Spinner spinning={loading}>
        <Card
          style={{
            marginTop: "64px",
          }}
        >
          <Form name="login" autoComplete="off" onFinish={onFinish}>
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "請輸入用戶名！" }]}
            >
              <Input
                prefix={<FontAwesomeIcon icon={faUser} />}
                placeholder="用戶名"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "請輸入密碼！" }]}
            >
              <Input.Password
                prefix={<FontAwesomeIcon icon={faLock} />}
                placeholder="密碼"
              />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                登錄
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Spinner>
    </div>
  );
}
