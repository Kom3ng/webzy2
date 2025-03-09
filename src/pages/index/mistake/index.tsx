import useSWR from "swr";
import { mistakeApi } from "../../../api";
import { App, Card } from "antd";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faBook,
  faBottleWater,
  faBug,
  faCalculator,
  faDna,
  faEarthAsia,
  faPallet,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage";
import { faSchool } from "@fortawesome/free-solid-svg-icons/faSchool";
import { faHammer } from "@fortawesome/free-solid-svg-icons/faHammer";
import { faPeace } from "@fortawesome/free-solid-svg-icons/faPeace";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons/faScaleBalanced";
import Spinner from "../../../components/Spinner";
import { Link } from "react-router";

export default function MistakeBooks() {
  const { message } = App.useApp();

  const { isLoading, data, error } = useSWR("/mistakebooks", () =>
    mistakeApi.getMyMistakeBooks({
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
    return (
      <div className="font-bold text-lg lg:m-48 md:m-32 m-16">
        发生了错误，请刷新重试
      </div>
    );
  }

  if (!data?.success) {
    message.error(data?.error?.message);
    return (
      <div className="font-bold text-lg lg:m-48 md:m-32 m-16">
        发生了错误，请刷新重试
      </div>
    );
  }

  return (
    <div className="m-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {data.result?.map((b) => {
        return (
          <Link key={b.id} to={`/mistake/${b.id}/`}>
            <Card>
              {subjectIcon(b.topicId || 0)}
              <span className="font-bold ml-4 text-lg">{b.topic?.content}</span>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

const iconMap = new Map<number, ReactNode>([
  [5, <FontAwesomeIcon icon={faCalculator} className="size-6" />],
  [6, <FontAwesomeIcon icon={faLanguage} className="size-6" />],
  [4, <FontAwesomeIcon icon={faPen} className="size-6" />],
  [8, <FontAwesomeIcon icon={faBottleWater} className="size-6" />],
  [7, <FontAwesomeIcon icon={faAtom} className="size-6" />],
  [9, <FontAwesomeIcon icon={faDna} className="size-6" />],
  [10, <FontAwesomeIcon icon={faScaleBalanced} className="size-6" />],
  [11, <FontAwesomeIcon icon={faPeace} className="size-6" />],
  [12, <FontAwesomeIcon icon={faEarthAsia} className="size-6" />],
  [15, <FontAwesomeIcon icon={faHammer} className="size-6" />],
  [35, <FontAwesomeIcon icon={faPallet} className="size-6" />],
  [68, <FontAwesomeIcon icon={faBug} className="size-6" />],
  [92, <FontAwesomeIcon icon={faSchool} className="size-6" />],
]);

function subjectIcon(id: number): ReactNode {
  return (
    iconMap.get(id) || <FontAwesomeIcon icon={faBook} className="size-6" />
  );
}
