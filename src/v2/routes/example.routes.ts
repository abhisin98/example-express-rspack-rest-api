import { Router } from "express";

import { GET, POST } from "../controllers/example";

const router = Router();

// --------------------------------------------------------------------
// TODO: move all controllers in the controllers folder
router.get("/", GET);
router.post("/", POST);

// --------------------------------------------------------------------
export { router as exampleRouter };
