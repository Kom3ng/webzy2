import { Configuration, FetchAPI, ManageApi, MistakeApi } from "./gen/api";

const config = new Configuration({
  basePath: "https://zyp.astrack.me/api",
});
export const mistakeApi = new MistakeApi(config);
export const manageApi = new ManageApi(config);

export function updateToken(token?: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config as any).configuration.accessToken = token;
}

export function setFetcher(fecher: FetchAPI) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config as any).configuration.fetchApi = fecher;
}
