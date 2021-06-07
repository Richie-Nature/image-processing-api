import "module-alias/register";
import express from "express";
import routes from "@routes/index";

const app = express();
const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port localhost:${port}`);
});

export default app;
