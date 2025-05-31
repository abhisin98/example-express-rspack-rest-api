import { Router } from "express";

import { GET, POST, PUT, DELETE } from "../controllers/example";

const router = Router();

// --------------------------------------------------------------------
// TODO: move all controllers in the controllers folder
router.get("/", GET);
router.post("/add", POST);
router.post("/update", PUT);
router.post("/delete", DELETE);

// --------------------------------------------------------------------
export { router as exampleRouter };
