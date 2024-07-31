import express from "express";
const router = express.Router();

//---------------------------------------------------------------------------
router.get('/', (req, res) => {
  // get all users
  const userInfo = [{
    name: "Abhi Sinha",
    code: "xxx"
  }]
  res.send(userInfo)
});

// router.post('/', (req, res) => {
//   // create a new user
// });

// router.get('/:id', (req, res) => {
//   // get a specific user by ID
// });

// router.put('/:id', (req, res) => {
//   // update a specific user by ID
// });

// router.delete('/:id', (req, res) => {
//   // delete a specific user by ID
// });

export default router;
