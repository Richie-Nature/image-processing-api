import transform from "@utils/image-transform";
import express from "express";

const transformRoute = express.Router();

transformRoute.get("/", transform, (req: express.Request, res: express.Response) => {
  res.send("");
});

export default transformRoute;
