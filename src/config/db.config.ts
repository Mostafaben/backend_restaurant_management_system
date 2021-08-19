import { Sequelize } from "sequelize";
import {
  DB_PASS,
  DB_USER,
  DB_HOST,
  DB_NAME,
  DB_PORT,
} from "./enviroments.config";

const db: Sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT!),
  dialect: "mysql",
});

export default db;
