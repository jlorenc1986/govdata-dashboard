import app from "./index";
import request from "supertest";
import pug from "pug";
import path from "path";
import { getDashboardData } from "./controllers/getDashboardData";
import * as mockResponse from "./constants/mockApiResponse.json";
import axios from "axios";
jest.mock("axios");

describe("GET /", () => {
  it('renders home page with data from govData api', async () => {
     // mock api request
    const mock = axios as jest.Mocked<typeof axios>;
    mock.get.mockResolvedValue({ data: mockResponse });

    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    // expect(response.text).toEqual(
    //   pug.renderFile(path.join(__dirname, "./views/index.pug"), {
    //     title: TITLE,
    //     data: new Map<string, number>(),
    //     message: SALUTATION,
    //   }),
    // );
  });
});
