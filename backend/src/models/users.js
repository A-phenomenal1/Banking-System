const { Double } = require("mongodb");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is incorrect...");
        }
      },
    },
    accountNo: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minLength: 10,
    },
    branchName: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
