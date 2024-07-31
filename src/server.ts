import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import apiv1 from "./v1/routes";
import apiv2 from "./v2/routes";

/*
"build": "npx tsc",
    "start": "node build/server.js",
    "dev": "nodemon --config nodemon.json src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"

    */

//---------------------------------------------------------------------------
dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000;

// enabling CORS for some specific origins only.
let corsOptions = {
    // origin : ['http://localhost:5500'], 
 }
      
//---------------------------------------------------------------------------
app.use(express.json());
app.use(cors(corsOptions))
app.use("/api/v1", apiv1);
app.use("/api/v2", apiv2);

//---------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
    
});