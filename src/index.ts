import "./utils/bootstrap";
import express, { Request, Response, NextFunction } from "express";
import config from "./utils/config";
import { ERROR_MESSAGE } from "./utils/constants";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(`${config.prefix}/api`, router);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "API not found.",
  });
});

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(new Date(), err);
  res.status(err.statusCode || 500).json({
    message: config.appEnv === "production" ? ERROR_MESSAGE : err.message || ERROR_MESSAGE,
  });
});

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
