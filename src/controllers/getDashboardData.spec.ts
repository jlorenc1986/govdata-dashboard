import IDataResponse from "../interfaces/IDataResponse";
import axios from "axios";
import { getDashboardData } from "./getDashboardData";
import * as mockResponse from "../constants/mockApiResponse.json";

jest.mock("axios");

describe("test suite for getDataDashboard", () => {
  it("should return proper data", async () => {
    // mock api request
    const mock = axios as jest.Mocked<typeof axios>;
    mock.get.mockResolvedValue({ data: mockResponse });

    const got: Map<string, number> = await getDashboardData();

    expect(got).toBeDefined();
    expect(got).toBeInstanceOf(Map<string, number>);
    expect(got.size).toEqual(6);
  });
});
