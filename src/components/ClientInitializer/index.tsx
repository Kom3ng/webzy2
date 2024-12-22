import { useNavigate } from "react-router";
import { manageApi, setFetcher, updateToken } from "../../api";
import { useUserStore } from "../../hooks/user";
import { App } from "antd";

export default function ClientInitializer() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const { message } = App.useApp();
  if (user) {
    updateToken(user.accessToken);
  }
  setFetcher(fetchWithRetry);

  function navigateToLogin() {
    navigate(
      `/login?from=${window.location.pathname + window.location.search}`,
    );
  }

  async function fetchWithRetry(url: string, options: RequestInit = {}) {
    const resp = await fetch(url, options);
    if (resp.status === 401) {
      if (url.toLowerCase().endsWith("refreshtoken")) return resp;
      const now = new Date();
      if (!user) {
        navigateToLogin();
        return resp;
      }

      if (user.refreshTokenExpiresDate.getTime() > now.getTime()) {
        const r = await manageApi.refreshToken({
          refreshToken: user.refreshToken,
        });

        if (!r.success) {
          message.warning("登錄失敗: " + r.error?.message);
          navigateToLogin();
          return resp;
        }
        const accessToken = r.result?.accessToken;
        const refreshToken = r.result?.refreshToken;
        const now2 = new Date();
        if (accessToken && refreshToken) {
          setUser({
            ...user,
            accessToken,
            refreshToken,
            tokenExpiresDate: new Date(
              now2.getTime() + r.result!.expireInSeconds! * 1000,
            ),
            refreshTokenExpiresDate: new Date(
              now2.getTime() + r.result!.refreshExpireInSeconds! * 1000,
            ),
          });

          return fetch(url, {
            ...options,
            headers: {
              ...options.headers,
              Authorization: `Bearer ${accessToken}`,
            },
          });
        }
      }

      navigateToLogin();
      return resp;
    }

    return resp;
  }
  return <></>;
}
