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
        <ErrorBoundary fallback={<span>oops</span>}>
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
