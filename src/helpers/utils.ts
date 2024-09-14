import IDataResponse from "../interfaces/IDataResponse";
import IDepartments from "../interfaces/IDepartments";

export const reduceToMap = (
  acc: Map<string, number>,
  curr: IDataResponse,
): Map<string, number> => {
  if (acc.has(curr.name)) {
    const itemValue = acc.get(curr.name) as number;
    acc.set(curr.name, itemValue + 1);
  } else {
    acc.set(curr.name, 1);
  }

  return acc;
};

export const buildUrls = (
  baseUrl: string,
  searchParams: Array<IDepartments>,
): Array<string> => {
  const urls: Array<string> = [];
  searchParams.map((i) => {
    urls.push(`${baseUrl}${i.name}`);
  });
  return urls;
};
