import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { buildRouter } from "api/router";
import { getEnvVariable } from "utils/getEnvVariable";
import {
  log,
} from "logger/logger";
import { connectDB } from "db/dbconnection";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(buildRouter());

const PORT = getEnvVariable("PORT") || 3000;
console.log(PORT);
app.listen(PORT, () => {
  log(
    "Notify",
    `Infra server is up and running http://localhost:${PORT}
    Bundled with esbuild
    `
  );
});

connectDB()
  .then(() => {
    log("Notify", "Infra server DB Connected");
  })
  .catch((error: Error) => {
    log("Error", `DB ERROR: ${JSON.stringify(error.message)}`);
  });
