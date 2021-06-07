import express from "express";
import resizeRoute from "@routes/api/image-resize";

const routes = express.Router();

routes.get("/", (req, res) => {
  
});

routes.use("/images", resizeRoute);

export default routes;