import express from "express";
import { Sharp } from "sharp";
import resizeImage from "@utils/tools/resizer";
import { imageMeta } from "@utils/types/index";

const transform = async (
  req: express.Request,
  res: express.Response,
  next: () => any
) => {
    if(req.params[`w`] || req.params[`h`]) {
        const meta: imageMeta = {
            fn: req.params[`fn`],
            w: +req.params[`w`] || undefined,
            h: +req.params[`h`] || undefined
        };
      await resizeImage(meta);
      next();
    }
};

export default transform;
