import Axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import colors from "../../config/colors";

import "./Modal.css";

function CreateUserModal(props) {
  const [userDetail, setUserDetailed] = useState({
    accountNo: "",
    name: "",
    email: "",
    balance: "",
    branchName: "",
    contactNo: "",
    accountType: "",
    createdAt: "",
  });
  const [error, setError] = useState("");

  const createUser = async () => {
    try {
      await Axios.post("http://localhost:5000/users", {
        accountNo: userDetail.accountNo,
        name: userDetail.name,
        email: userDetail.email,
        balance: userDetail.balance,
        branchName: userDetail.branchName,
        contactNo: userDetail.contactNo,
        accountType: userDetail.accountType,
      });
      props.onHide();
      window.location.reload(false);
    } catch (error) {
      setError("Error in details that you filled");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 text-center title"
        >
          Add New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label htmlFor="account-no" className="title2">
            Account No :
          </label>
          <input
            type="text"
            id="account-no"
            name="Account No"
            value={userDetail.accountNo}
            className="input-field"
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, accountNo: event.target.value };
              })
            }
          />
          <label htmlFor="name" className="title2">
            Full Name :
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={userDetail.name}
            className="input-field"
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, name: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email" className="title2">
            Email Id :
          </label>
          <input
            type="text"
            id="email"
            name="Email"
            value={userDetail.email}
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, email: event.target.value };
              })
            }
            className="input-field"
          />
          <label htmlFor="balance" className="title2">
            Balance :
          </label>
          <input
            type="text"
            id="balance"
            name="Balance"
            value={`${userDetail.balance}`}
            className="input-field"
            style={{ backgroundColor: colors.light3, fontWeight: 600 }}
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, balance: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="branch-name" className="title2">
            Branch Name :
          </label>
          <input
            type="text"
            id="branch-name"
            name="Branch Name"
            value={userDetail.branchName}
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, branchName: event.target.value };
              })
            }
            className="input-field"
          />
          <label htmlFor="contact-no" className="title2">
            Contact No :
          </label>
          <input
            type="text"
            id="contact-no"
            name="Contact No"
            value={userDetail.contactNo}
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, contactNo: event.target.value };
              })
            }
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="account-type" className="title2">
            Account Type :
          </label>
          <input
            type="text"
            id="account-type"
            name="Account Type"
            value={userDetail.accountType}
            onChange={(event) =>
              setUserDetailed((prevState) => {
                return { ...prevState, accountType: event.target.value };
              })
            }
            className="input-field"
          />
          <label htmlFor="opening" className="title2">
            Opening Date :
          </label>
          <input
            type="text"
            id="opening"
            name="Openning Date"
            placeholder="Automatic Fetched"
            value={userDetail.createdAt.substr(0, 10)}
            className="input-field"
            disabled
          />
        </div>
        {error !== "" ? (
          <span style={{ color: colors.primary2, fontSize: "0.8em" }}>
            {error}
          </span>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="btn"
          style={{ backgroundColor: colors.primary2 }}
        >
          Close
        </Button>
        <Button onClick={createUser}>Add Account</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateUserModal;
