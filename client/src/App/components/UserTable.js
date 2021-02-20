import React, { useEffect, useState } from "react";
import Axios from "axios";

import TableRow from "./UserTableRow";
import UpdateUserModal from "./UpdateUserModal";
import DeleteUserModal from "./DeleteUserModal";
import SendMoneyModal from "./SendMoneyModal";
import colors from "../../config/colors";

function UserTable(props) {
  const [state, setState] = useState([]);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isSendMoneyModal, setIsSendMoneyModal] = useState(false);
  const [num, setNum] = useState(0);
  const [getProps, setGetProps] = useState({
    accountNo: 0,
    name: "",
    balance: 0,
  });

  const updateUser = (accountNo) => {
    setIsUpdateModal(true);
    setGetProps((prevState) => {
      return {
        ...prevState,
        accountNo,
      };
    });
  };

  const deleteUser = (accountNo) => {
    setIsDeleteModal(true);
    setGetProps((prevState) => {
      return {
        ...prevState,
        accountNo,
      };
    });
  };

  const sendMoney = (accountNo, name, balance) => {
    setIsSendMoneyModal(true);
    setGetProps({
      accountNo,
      name,
      balance,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/allUsers")
      .then((response) => {
        setState(response.data);
        props.from === "home2" ? setNum(5) : setNum(response.data.length);
      })
      .catch((e) => {
        console.log("Can't catch the response...", e);
      });
  }, []);
  return (
    <div className="table-responsive-xl">
      <table
        className="table"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "8px 8px 10px gray",
        }}
      >
        <thead className="thead-dark">
          <tr>
            <>
              <th scope="col" className="text-center">
                Sr.No
              </th>
              <th scope="col" className="text-center">
                Account No
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Email Id
              </th>
              <th scope="col" className="text-center">
                Balance
              </th>
              <th scope="col" className="text-center">
                Contact No
              </th>
              <th scope="col" className="text-center">
                Account Type
              </th>
            </>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {state.slice(0, num).map((val, key) => {
            return (
              <TableRow
                key={val._id}
                srNo={key + 1}
                accountNo={val.accountNo}
                name={val.name}
                email={val.email}
                balance={val.balance}
                contactNo={val.contactNo}
                accountType={val.accountType}
                updateCallback={updateUser}
                deleteCallback={deleteUser}
                sendMoneyCallback={sendMoney}
              />
            );
          })}
          {state.length === 0 ? (
            <tr>
              <th scroll="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ color: colors.dark1, fontSize: "1.5em" }}>
                ...No Users...
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {isUpdateModal ? (
        <UpdateUserModal
          show={isUpdateModal}
          onHide={() => setIsUpdateModal(false)}
          accountno={getProps.accountNo}
        />
      ) : null}
      {isDeleteModal ? (
        <DeleteUserModal
          show={isDeleteModal}
          onHide={() => setIsDeleteModal(false)}
          accountno={getProps.accountNo}
        />
      ) : null}
      {isSendMoneyModal ? (
        <SendMoneyModal
          show={isSendMoneyModal}
          onHide={() => setIsSendMoneyModal(false)}
          accountno={getProps.accountNo}
          name={getProps.name}
          balance={getProps.balance}
        />
      ) : null}
    </div>
  );
}

export default UserTable;
