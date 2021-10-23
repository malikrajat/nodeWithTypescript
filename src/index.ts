import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "typescript-rest";

import "./handlers";

export const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Server.buildServices(app);

// just to check for port number is use
let port = parseInt(process.env.PORT || "");
if (isNaN(port) && port === 0) {
	port = 400;
}
app.listen(port, "0.0.0.0", () => {
	console.log("Server started on port " + port);
});
