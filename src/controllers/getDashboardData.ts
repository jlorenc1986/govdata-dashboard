import axios, { AxiosResponse } from "axios";
import { SEARCH_DATASET_API } from "../constants/urls";
import IDataResponse from "../interfaces/IDataResponse";
import { buildUrls, reduceToMap } from "../helpers/utils";
import * as d from "../constants/departaments.json";

export const getDashboardData = async (): Promise<Map<string, number>> => {
  const datasets: IDataResponse[] = [];

  const urls = buildUrls(SEARCH_DATASET_API, d.departments);

  const requests = urls.map((url: string) => axios.get(url));

  const [...responses]: Array<AxiosResponse> =
    await Promise.all<AxiosResponse>(requests);

  const dataToConvert = responses.flat();

  if (dataToConvert.length > 0) {
    dataToConvert.map((e) => {
      e.data.result.results.map(
        (i: { author: string; num_resources: number }) => {
          const regex = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
          const idx = i.author.search(regex);

          datasets.push({
            name:
              idx != -1 ? i.author.substring(0, idx).trim() : i.author.trim(),
            count: i.num_resources,
          });
        },
      );
    });
  }

  const reducedMap = datasets.reduce(reduceToMap, new Map<string, number>());

  return new Map(
    [...reducedMap].sort((a, b) => {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    }),
  );
};
