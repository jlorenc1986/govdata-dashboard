import IDataResponse from "../interfaces/IDataResponse";
import { reduceToMap } from "./utils";

it("should convert to map object", () => {
  const want: Map<string, number> = new Map();
  want.set("lorenc", 2);
  want.set("carmelo", 1);
  const data: IDataResponse[] = [
    { name: "lorenc", count: 1 },
    { name: "lorenc", count: 2 },
    { name: "carmelo", count: 222 },
  ];
  const got = data.reduce(reduceToMap, new Map<string, number>());
  expect(got).toEqual(want);
});
