import express, { Response } from "express";
import { PORT } from "./src/config/enviroments.config";
import cors from "cors";
import db from "./src/config/db.config";
import formData from "express-form-data";
import router from "./src/http/routers/index.router";
import httpErrorHandlerService from "./src/core/services/http_error.service";
import HttpCodeError from "./src/core/enums/http_response_code.enum";
import HttpError from "./src/utils/http_error.class";
import "./src/models";

// express instance
const app = express();

//configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(formData.parse());
app.use(formData.format());

app.use("/api", router);
app.use("**", (_, res: Response) => {
  const error = new HttpError("Page Not Found", HttpCodeError.NOT_ALLOWED);
  httpErrorHandlerService.handleHttpError(error, res);
});

//start server
const main = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

main();
