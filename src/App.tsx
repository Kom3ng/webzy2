import routes from "~react-pages";
import { Suspense } from "react";
import { useRoutes } from "react-router";
import { App, ConfigProvider } from "antd";
import ClientInitializer from "./components/ClientInitializer";
import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "./components/Spinner";

function Application() {
  return (
    <SWRConfig value={{ dedupingInterval: 30 * 1000 }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#eb2f96",
            colorInfo: "#eb2f96",
            borderRadius: 16,
          },
        }}
      >
        <ErrorBoundary
          fallback={
            <div className="lg:m-48 md:m-32 m-16">
              <div className="font-bold text-xl">
                发生错误，请尝试刷新页面。
              </div>
              <div>
                如果问题持续存在请在
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://github.com/Kom3ng/webzy2/issues"
                >
                  Github
                </a>
                上寻求帮助
              </div>
            </div>
          }
        >
          <App>
            <ClientInitializer />
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spinner size="large" />
                </div>
              }
            >
              {useRoutes(routes)}
            </Suspense>
          </App>
        </ErrorBoundary>
      </ConfigProvider>
    </SWRConfig>
  );
}

export default Application;
