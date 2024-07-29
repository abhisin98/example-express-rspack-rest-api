const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
      
//---------------------------------------------------------------------------
app.use(express.json());
app.use("/api/v1", require("./v1/routes"));
app.use("/api/v2", require("./v2/routes"));

//---------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});