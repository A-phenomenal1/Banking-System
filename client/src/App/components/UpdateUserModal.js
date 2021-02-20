import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import colors from "../../config/colors";

import "./Modal.css";

function UpdateUserModal(props) {
  const [userDetail, setUserDetailed] = useState({
    accountNo: 0,
    name: "",
    email: "",
    balance: "",
    branchName: "",
    contactNo: "",
    accountType: "",
    createdAt: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/search/" + props.accountno)
      .then((response) => setUserDetailed(response.data))
      .catch((e) => {
        console.log("Can't catch the response...", e);
      });
  }, [props.accountno]);

  const updateChanges = async () => {
    try {
      await Axios.patch("http://localhost:5000/update/" + props.accountno, {
        email: userDetail.email,
        branchName: userDetail.branchName,
        contactNo: userDetail.contactNo,
        accountType: userDetail.accountType,
      });
      props.onHide();
      window.location.reload(false);
    } catch (error) {
      setError("Email is already used...");
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
          Update User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label htmlFor="account-no" className="title2">
            Account No :
          </label>
          <input
            type="text"
            value={props.accountno}
            className="input-field"
            disabled
          />
          <label htmlFor="name" className="title2">
            Full Name :
          </label>
          <input
            type="text"
            value={userDetail.name}
            className="input-field"
            disabled
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
            value={` $ ${userDetail.balance}`}
            className="input-field"
            style={{ backgroundColor: colors.light3, fontWeight: 600 }}
            disabled
          />
        </div>
        {error !== "" ? (
          <span style={{ color: colors.primary2, fontSize: "0.8em" }}>
            {error}
          </span>
        ) : null}
        <div>
          <label htmlFor="branch-name" className="title2">
            Branch Name :
          </label>
          <input
            type="text"
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
            value={userDetail.createdAt.substr(0, 10)}
            className="input-field"
            disabled
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="btn"
          style={{ backgroundColor: colors.primary2 }}
        >
          Close
        </Button>
        <Button onClick={updateChanges}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateUserModal;
