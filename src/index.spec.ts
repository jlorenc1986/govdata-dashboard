import app from "./index"
import request from "supertest"
import pug from "pug"
import path from "path"
import { SALUTATION, TITLE } from "./constants/string";
import { getDashboardData } from "./controllers/getDashboardData";

describe("GET /", () => {
    it('responds with "Welcome to unit testing guide for nodejs, typescript and express!', async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toEqual(
        pug.renderFile(path.join(__dirname, './views/index.pug'),{title: TITLE, data: getDashboardData(), message: SALUTATION})
      );
    });
  });