const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const UserRouter = require("./router/users");
const TransactionRouter = require("./router/transaction");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(TransactionRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
