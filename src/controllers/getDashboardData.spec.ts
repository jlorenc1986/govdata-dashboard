import axios from "axios";
import { getDashboardData } from "./getDashboardData";
import * as mockResponse from "../constants/mockApiResponse.json";

jest.mock("axios");

const mock = axios as jest.Mocked<typeof axios>;

describe("test suite for getDataDashboard", () => {
  beforeAll(() => {
    mock.get.mockClear();
    mock.get.mockResolvedValue({ data: mockResponse });
    mock.all.mockReturnValue(Promise.resolve([{}, {}, {}, {}, {}, {}]));
    mock.spread.mockReturnValue(jest.fn());
  });

  it("should return proper data", async () => {
    const got: Map<string, number> = await getDashboardData();
    expect(got).toBeDefined();
    expect(got).toBeInstanceOf(Map<string, number>);
    expect(got.size).toEqual(3);
  });
});
