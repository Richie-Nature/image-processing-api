import express from "express";

const resizeRoute = express.Router();

resizeRoute.get("/", (req: express.Request, res: express.Response)=> {
    res.send("");
});

export default resizeRoute;