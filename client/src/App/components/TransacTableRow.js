import React, { useState } from "react";
import colors from "../../config/colors";

import "./Home.css";
import "../../App.css";

function TransacTableRow(props) {
  const {
    srNo,
    id,
    senderAccountNo,
    receiverAccountNo,
    transferAmt,
    createdAt,
    invoiceCallback,
    deleteCallback,
  } = props;
  const time = {
    date: props.createdAt.substr(0, 10),
    clockTime: props.createdAt.substr(11, 8),
  };
  return (
    <>
      <tr>
        <th scope="row" className="text-center">
          {srNo}
        </th>
        <td className="text-center">{senderAccountNo}</td>
        <td className="text-center">{receiverAccountNo}</td>
        <td className="text-center">$ {transferAmt}</td>
        <td className="text-center">
          {time.date} & {time.clockTime}
        </td>
        <td className="text-center">
          <div
            className="btn text-light"
            style={{ backgroundColor: colors.secondary2, marginRight: "5px" }}
            onClick={() => invoiceCallback(id)}
          >
            Invoice
          </div>
          <div
            className="btn text-light"
            style={{ backgroundColor: colors.primary2 }}
            onClick={() => deleteCallback(id)}
          >
            &nbsp;Delete&nbsp;
          </div>
        </td>
      </tr>
    </>
  );
}

export default TransacTableRow;
