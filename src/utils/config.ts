import path from "path";

type AppConfig = {
  port: number;
  rootDir: string;
  appEnv: "local" | "development" | "production";
  prefix: string;
};

const config: AppConfig = {
  port: parseInt(process.env.PORT || "4011", 10),
  rootDir: path.join(__dirname, "..", "..", ".."),
  appEnv: (process.env.APP_ENV as AppConfig["appEnv"]) || "production",
  prefix: "/nlp",
};

export default config;
