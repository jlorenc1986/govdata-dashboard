import express, { Response, Request } from "express";
import path from "path";

import { getDashboardData } from "./controllers/getDashboardData";
import locale from "./constants/locale";

const app = express();

const port = process.env.PORT ? process.env.PORT : 9000;

/**
 * lets setup view engine with plug
 */
app.set("view engine", "pug");

app.use("/public", express.static(path.join(__dirname + "/public")));

app.set("views", path.join(__dirname, "./views/"));

app.get("/", async (req: Request, res: Response) => {
  res.render("index", { locale: locale, data: await getDashboardData() });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
