import cors, { CorsOptions } from "cors";
import express, { json } from "express";
import morgan from "morgan";

import apiv1 from "./v1";
import apiv2 from "./v2";
declare const module: any;

//---------------------------------------------------------------------------
const PORT = process.env.PORT || 4000;
const app = express();

// You may add core option here
const corsOptions: CorsOptions = {
  // enabling CORS for some specific origins only.
  origin: [],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["content-type"], // Allow specific headers
  credentials: true,
};

// You may add application-specific API middleware here, before all routes
app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(json());

// --------------------------------------------------------------------
// You may Mount application-specific API routes here.
app.use("/api/v1", apiv1);
app.use("/api/v2", apiv2);
app.get("/api/status", (req, res) => {
  res.status(200).json({ status: true, info: "API is running" });
});

// --------------------------------------------------------------------
// You may add application-specific API middleware here, after all routes have been processed.
// ...

//---------------------------------------------------------------------------
const server = app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    server.close();
    console.log("Server will close");
  });
}
