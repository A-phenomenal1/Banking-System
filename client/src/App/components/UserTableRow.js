import React from "react";
import colors from "../../config/colors";

import "./Home.css";
import "../../App.css";

function UserTableRow(props) {
  const {
    srNo,
    accountNo,
    name,
    email,
    balance,
    contactNo,
    accountType,
    updateCallback,
    deleteCallback,
    sendMoneyCallback,
  } = props;

  // console.log(props.balance);
  return (
    <>
      <tr>
        <th
          scope="row"
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {srNo}
        </th>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {accountNo}
        </td>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {name}
        </td>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {email}
        </td>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          $ {balance}
        </td>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {contactNo}
        </td>
        <td
          className="text-center"
          onClick={() => sendMoneyCallback(accountNo, name, balance)}
        >
          {accountType}
        </td>
        <td className="text-center">
          <div
            className="btn text-light mr-2"
            style={{ backgroundColor: colors.secondary2 }}
            onClick={() => updateCallback(accountNo)}
          >
            Update
          </div>
          <div
            className="btn text-light"
            style={{ backgroundColor: colors.primary2 }}
            onClick={() => deleteCallback(accountNo)}
          >
            &nbsp;Delete
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserTableRow;
