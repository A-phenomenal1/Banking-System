const express = require("express");
const Users = require("../models/users");
const router = new express.Router();

//Create a User
router.post("/users", async (req, res) => {
  const user = new Users(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//Read All User Profile
router.get("/allUsers", async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send("Error in reading all profiles...");
  }
});

//Searching a Account No
router.get("/search/:accNo", async (req, res) => {
  const _accNo = req.params.accNo;
  try {
    const user = await Users.findOne({ accountNo: _accNo });
    if (!user)
      return res.status(404).send("User with this Account No  Not Found...");
    res.send(user);
  } catch (error) {
    res.send(`Error in getting user...`);
  }
});

//Update the profile of User
router.patch("/update/:accNo", async (req, res) => {
  const _accNo = req.params.accNo;
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "email",
    "branchName",
    "accountType",
    "contactNo",
    "balance",
  ];
  const isValidOperations = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperations) return res.status(400).send("Invalid Updates");

  try {
    const user = await Users.findOneAndUpdate({ accountNo: _accNo }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user)
      return res.status(500).send("No User with Account No is Found...");

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

//Delete A User
router.delete("/delete/:accNo", async (req, res) => {
  const _accNo = req.params.accNo;
  try {
    const user = await Users.deleteOne({ accountNo: _accNo }).exec();
    if (!user)
      return res.status(404).send("User with this Account No  Not Found...");
    res.status(200).send();
  } catch (error) {
    return res.status(404).send("Network Problem");
  }
});

module.exports = router;
