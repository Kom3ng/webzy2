import { useParams } from "react-router";
import useSWR from "swr";
import { mistakeApi } from "../../../../../api";
import { useSearchParams } from "react-router";
import Spinner from "../../../../../components/Spinner";
import { App, Card, Image } from "antd";

export default function Page() {
  const id = Number.parseInt(useParams().id || "0");
  const hasStem = useSearchParams()[0].get("hasStem") === "true";
  const { message } = App.useApp();

  const { data, error, isLoading } = useSWR(
    `/mistake/-/${id}`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (): Promise<any> => {
      if (hasStem) {
        return mistakeApi.getMistakeQstItemDetailInfo({
          appName: "WebApp",
          appVersion: 0,
          itemId: id,
        });
      } else {
        return mistakeApi.getCustomMistakeQstItemDetailInfo({
          appName: "WebApp",
          appVersion: 0,
          itemId: id,
        });
      }
    },
  );

  if (isLoading) return <Spinner className="flex justify-center m-8" />;
  if (error)
    return (
      <div className="font-bold text-lg lg:m-48 md:m-32 m-16">
        发生了错误，请刷新重试
      </div>
    );
  if (!data.success) {
    message.error(data.error?.message);
    return (
      <div className="font-bold text-lg lg:m-48 md:m-32 m-16">
        发生了错误，请刷新重试
      </div>
    );
  }

  return (
    <Card className="m-8">
      {getAllValues(data.result)
        .filter((v) => {
          if (!(typeof v === "string")) return false;
          return isImageUrl(v);
        })
        .map((u) => (
          <Image src={u} alt="img"></Image>
        ))}
    </Card>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAllValues(obj: any): any[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        values.push(...getAllValues(value));
      } else {
        values.push(value);
      }
    }
  }
  return values;
}

function isImageUrl(url: string): boolean {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
  return imageExtensions.test(url);
}
