import { config } from "dotenv";
config();

const { PORT, DB_NAME, DB_PASS, DB_USER, DP_PORT, DB_HOST, DB_PORT } =
  process.env;

export { PORT, DB_NAME, DB_PASS, DB_USER, DP_PORT, DB_HOST, DB_PORT };
