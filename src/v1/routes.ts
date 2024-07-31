import express from "express";
import usersRouter from "./users";
let router = express.Router();

//---------------------------------------------------------------------------
router.use('/users', usersRouter);

//---------------------------------------------------------------------------
// router.use(function (req, res, next) {
//     res.json = res.json;
//     res.json = function json(obj) {
//         obj.apiVersion = 1;
//         res.json(obj);
//     };
//     next();
// });
router.get("/", (req, res) => {
    const status = {
        "info": "Welcome to api version 1",
        "Status": "Running",
    };
    res.send(status);
});

//---------------------------------------------------------------------------
export default router;