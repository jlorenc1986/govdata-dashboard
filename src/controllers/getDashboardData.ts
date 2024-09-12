import axios from "axios";
import { SEARCH_DATASET_API } from "../constants/urls";
import IDataResponse from "../interfaces/IDataResponse";
import { reduceToMap } from "../helpers/utils";

export const getDashboardData = async (): Promise<Map<string, number>> => {
  const data: IDataResponse[] = [{ name: "", count: 0 }];

  const response = await axios.get(SEARCH_DATASET_API);

  const dataToConvert = response.data;

  if (dataToConvert.result.results.length > 0) {
    dataToConvert.result.results.forEach(
      (element: { author: string; num_resources: number }) => {
        data.push({ name: element.author, count: element.num_resources });
      },
    );
  }

  const reducedMap = data.reduce(reduceToMap, new Map<string, number>());

  return new Map(
    [...reducedMap].sort((a, b) => {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    }),
  );
};
