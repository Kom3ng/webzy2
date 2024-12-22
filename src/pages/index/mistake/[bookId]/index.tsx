import { useNavigate, useParams } from "react-router";
import { mistakeApi } from "../../../../api";
import useSWR from "swr";
import Spinner from "../../../../components/Spinner";
import { App, Card, Image, List, Pagination, Tag } from "antd";
import { useSearchParams } from "react-router";

export default function Page() {
  const { bookId } = useParams();
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const page = Number.parseInt(searchParams.get("page") || "1");
  const navigate = useNavigate();
  const { isLoading, data, error } = useSWR(
    `/mistakes/${bookId}/?page=${page}`,
    () =>
      mistakeApi.searchMistakeQstItems({
        searchMistakeQstItemsRequest: {
          attainedLevel: [],
          bookId: Number.parseInt(bookId || "0"),
          diff: [],
          errorReason: [],
          haveNoTag: false,
          maxResultCount: 20,
          skipCount: (page - 1) * 20,
          tagIdList: [],
        },
        appName: "WebApp",
        appVersion: 0,
      }),
  );

  if (isLoading)
    return (
      <div className="flex justify-center mt-16">
        <Spinner />
      </div>
    );
  if (error) {
    message.error(error);
    return <>發生了錯誤，請刷新重試</>;
  }
  if (!data?.success) {
    message.error(data?.error?.message);
    return <>發生了錯誤，請刷新重試</>;
  }
  const items = data.result?.items || [];
  const count = data.result?.totalCount || 0;
  return (
    <div className="m-8">
      <Card bordered={false}>
        <List
          bordered
          dataSource={items}
          renderItem={(item) => {
            return (
              <List.Item
                onClick={() =>
                  navigate(
                    `/mistake/${bookId}/${item.id}/?hasStem=${item.hasStem}`,
                  )
                }
                actions={item.tagNames?.map((n) => (
                  <Tag color={colors[hashModulo(n, 11)]}>{n}</Tag>
                ))}
                key={item.id}
                extra={
                  <Image
                    src={item.stemShoot}
                    className="max-h-24"
                    width={272}
                    alt="preview"
                  />
                }
              >
                <List.Item.Meta title={item.name} description={item.source} />
              </List.Item>
            );
          }}
        ></List>

        <Pagination
          onChange={(p) => {
            navigate(`/mistake/${bookId}/?page=${p}`);
          }}
          className="flex justify-center mt-8"
          defaultCurrent={page}
          total={count}
        />
      </Card>
    </div>
  );
}

const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

function getStringHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

function hashModulo(input: string, n: number): number {
  const hash = getStringHash(input);
  return ((hash % n) + n) % n;
}
