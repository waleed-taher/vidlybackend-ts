import express from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";

const PORT = config.get<number>("port");

const app = express();

app.use(express.json());
app.listen(PORT, async () => {
  log.info(`App is lisening on Port ${PORT}`);

  await connect();

  routes(app);
});
