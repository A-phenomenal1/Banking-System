const mongoose = require("mongoose");
// const validator = require("validator");

const transacShema = mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
      trim: true,
    },
    senderAccountNo: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
      minLength: 10,
    },
    receiver: {
      type: String,
      required: true,
      trim: true,
    },
    receiverAccountNo: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
      minLength: 10,
    },
    senderContactNo: {
      type: Number,
      required: true,
    },
    transferAmt: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transactions = mongoose.model("transaction", transacShema);

module.exports = Transactions;
