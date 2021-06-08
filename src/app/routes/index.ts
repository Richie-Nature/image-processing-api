import express from "express";
import transformRoute from "@app/routes/api/transform-route";

const routes = express.Router();

routes.get("/", (req, res) => {});

routes.use("/images", transformRoute);

export default routes;
