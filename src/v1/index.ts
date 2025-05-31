import { Router } from "express";
import helmet from "helmet";

import { exampleRouter } from "./routes/example.routes";

//---------------------------------------------------------------------------
const api: Router = Router();

// You may add application-specific API middleware here, before all routes
// ...

//---------------------------------------------------------------------------
// You may add application-specific API routes here
// TODO: move all controllers in the controllers folder
api.use("/example", exampleRouter);
api.get("/", (req, res) => {
  res.status(200).json({ status: true, info: "API version 1 is running" });
});

// --------------------------------------------------------------------
// You may add application-specific API middleware here, after all routes have been processed.
// ...
// Global Helmet middleware applied after all router
api.use(helmet());

//---------------------------------------------------------------------------
export default api;
