import app from "./index";
import request from "supertest";
import pug from "pug";
import path from "path";
import { SALUTATION, TITLE } from "./constants/string";
import { getDashboardData } from "./controllers/getDashboardData";
import * as mockResponse from "./constants/mockApiResponse.json";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GET /", () => {
  it('responds with "Welcome to unit testing guide for nodejs, typescript and express!', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockResponse }),
    );

    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toEqual(
      pug.renderFile(path.join(__dirname, "./views/index.pug"), {
        title: TITLE,
        data: getDashboardData(),
        message: SALUTATION,
      }),
    );
  });
});
