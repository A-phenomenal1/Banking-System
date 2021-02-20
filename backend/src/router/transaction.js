const express = require("express");
const Transaction = require("../models/transaction");
const router = new express.Router();

router.post("/transaction", async (req, res) => {
  const transac = new Transaction(req.body);

  try {
    await transac.save();
    res.status(201).send(transac);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allTransacs", async (req, res) => {
  try {
    const transacs = await Transaction.find({});
    res.send(transacs);
  } catch (error) {
    res.status(500).send("Error in reading all transactions...");
  }
});

//search Transac
router.get("/searchTransac/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const transac = await Transaction.findOne({ _id: _id });
    if (!transac)
      return res.status(404).send("Transaction with this id is Not Found...");
    res.send(transac);
  } catch (error) {
    res.send(`Error in getting transac...`);
  }
});

//delete Transac
router.delete("/deleteTransac/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const transac = await Transaction.deleteOne({ _id: _id }).exec();
    if (!transac)
      return res.status(404).send("Tranction with this id  Not Found...");
    res.status(200).send();
  } catch (error) {
    return res.status(404).send("Network Problem");
  }
});

module.exports = router;
