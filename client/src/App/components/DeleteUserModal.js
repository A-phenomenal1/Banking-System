import React, { useState } from "react";
import Axios from "axios";
import { Modal, Button } from "react-bootstrap";

import colors from "../../config/colors";

function DeleteUserModal(props) {
  const [error, setError] = useState("");

  const removeUser = async () => {
    try {
      await Axios.delete("http://localhost:5000/delete/" + props.accountno);
      props.onHide();
      window.location.reload(false);
    } catch (error) {
      setError("Error!!, try after sometime");
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
          Delete User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div
            className="para"
            style={{ color: colors.dark1, fontSize: "1.3em" }}
          >
            Are you sure to remove account with{" "}
            <span>&nbsp;Account Number </span>
            <span
              style={{
                color: colors.primary3,
                fontWeight: "bold",
                fontSize: "1.3em",
              }}
            >
              &nbsp;{props.accountno}
            </span>
          </div>
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
          Cancel
        </Button>
        <Button onClick={removeUser}>Remove Account</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteUserModal;
