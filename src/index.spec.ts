import app from "./index";
import request from "supertest";
import pug from "pug";
import path from "path";
import { getDashboardData } from "./controllers/getDashboardData";
import * as mockResponse from "./constants/mockApiResponse.json";
import axios from "axios";
import locale from "./constants/locale";
import { Server } from "http";

jest.setTimeout(3000);
jest.mock("axios");

let server: Server;

describe("GET /", () => {
  beforeEach(async () => {
    server = await app.listen(4000);
  });

  afterEach(async () => {
    return await server.close();
  });

  it("renders home page with data from govData api", async () => {
    // mock api request
    const mock = axios as jest.Mocked<typeof axios>;
    mock.get.mockResolvedValue({ data: mockResponse });

    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain(
      pug.renderFile(path.join(__dirname, "./views/index.pug"), {
        locale: locale,
        data: await getDashboardData(),
      }),
    );
  });
});
