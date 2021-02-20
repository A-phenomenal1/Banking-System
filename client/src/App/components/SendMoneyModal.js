import Axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import colors from "../../config/colors";
import DoneComponent from "./DoneComponent";
import done from "../../assets/success.png";
import failed from "../../assets/failed.png";

function SendMoneyModal(props) {
  const [detail, setDetail] = useState({
    accountNo: 0,
    name: "",
    email: "",
    balance: 0,
    amount: 0,
    message: "",
  });
  // const [transacDetails, setTransacDetails] = useState({
  //   sender: {},
  //   receiver: {},
  // });
  const [sender, setSender] = useState({
    name: "",
    email: "",
    accountNo: "",
    contactNo: "",
  });
  const [receiver, setReceiver] = useState({
    name: "",
    accountNo: "",
  });
  const [btnTitle, setBtnTitle] = useState("Search User");
  const [error, setError] = useState({ isError: false, error: "" });
  const [isModal, setIsModal] = useState(false);
  const [status, setStatus] = useState({ isSuccess: false, img: "" });

  const searchUser = async () => {
    //Receiver
    await Axios.get("http://localhost:5000/search/" + detail.accountNo)
      .then((response) => {
        if (response.data.accountNo !== props.accountno) {
          setDetail((prevState) => {
            return {
              ...prevState,
              name: response.data.name,
              email: response.data.email,
              balance: response.data.balance,
            };
          });
          setReceiver({
            name: response.data.name,
            accountNo: response.data.accountNo,
          });
          setError((prevState) => {
            return { ...prevState, isError: false };
          });
          setBtnTitle("Send Money");
        } else {
          setError({
            isError: true,
            error: "You can't send money to yourself...",
          });
        }
      })
      .catch((e) =>
        setError({ isError: true, error: "Invalid Account No..." })
      );
    //Sender
    await Axios.get("http://localhost:5000/search/" + props.accountno)
      .then((response) => {
        console.log("sender: ", response.data);
        setSender({
          name: response.data.name,
          email: response.data.email,
          accountNo: response.data.accountNo,
          contactNo: response.data.contactNo,
        });
      })
      .catch((error) => {
        alert("error in senderSearch");
      });
  };

  const addTransaction = async () => {
    try {
      console.log("sender= ", sender);
      console.log("receiver=", receiver);
      await Axios.post("http://localhost:5000/transaction", {
        sender: sender.name,
        senderMail: sender.email,
        senderAccountNo: sender.accountNo,
        receiver: receiver.name,
        receiverAccountNo: receiver.accountNo,
        senderContactNo: sender.contactNo,
        message: detail.message,
        transferAmt: detail.amount,
      });
    } catch (error) {
      alert("Error!!!");
    }
  };

  const sendMoney = async () => {
    try {
      if (props.balance - detail.amount >= 0) {
        //Sender
        await Axios.patch("http://localhost:5000/update/" + props.accountno, {
          balance: props.balance - detail.amount,
        });
        //Receiver
        await Axios.patch("http://localhost:5000/update/" + detail.accountNo, {
          balance: Number(detail.balance) + Number(detail.amount),
        });
        await addTransaction();
        setIsModal(true);
        setStatus({ isSuccess: true, img: done });
        setTimeout(() => {
          props.onHide();
          window.location.reload(false);
        }, 1500);
      } else {
        setIsModal(true);
        setError({ isError: true, error: "Insufficient Balance!!" });
        setStatus({ isSuccess: false, img: failed });
        setTimeout(() => {
          props.onHide();
        }, 2000);
      }
    } catch (error) {
      setError({ isError: true, error: "Unable to send money, Try Again.." });
    }
  };

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center title"
          >
            <span style={{ fontSize: "0.8em", color: colors.primary2 }}>
              {props.accountno}
            </span>
            &nbsp;&nbsp;[
            <span style={{ fontSize: "0.8em", color: colors.secondary1 }}>
              {props.name}
            </span>
            ]
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label
              htmlFor="account-no"
              className="title2"
              style={{ width: "35%" }}
            >
              Account No :
            </label>
            <input
              type="text"
              value={detail.accountno}
              placeholder="Receiver's Account no"
              className="input-field"
              style={{ width: "60%" }}
              onChange={(event) =>
                setDetail((prevState) => {
                  return { ...prevState, accountNo: event.target.value };
                })
              }
            />
            {error.isError === true && detail.name === "" ? (
              <span style={{ fontSize: "0.9em", color: colors.primary2 }}>
                {error.error}
              </span>
            ) : null}
            {detail.name !== "" ? (
              <>
                <label
                  htmlFor="name"
                  className="title2"
                  style={{ width: "35%" }}
                >
                  Full Name :
                </label>
                <input
                  type="text"
                  value={detail.name}
                  placeholder="Account Holder Name"
                  className="input-field"
                  style={{ width: "60%" }}
                  onChange={(event) =>
                    setDetail((prevState) => {
                      return { ...prevState, name: event.target.value };
                    })
                  }
                  disabled
                />
                <label
                  htmlFor="name"
                  className="title2"
                  style={{ width: "35%" }}
                >
                  Email Id :
                </label>
                <input
                  type="text"
                  value={detail.email}
                  placeholder="Account Holder Email Id"
                  className="input-field"
                  style={{ width: "60%" }}
                  onChange={(event) =>
                    setDetail((prevState) => {
                      return { ...prevState, email: event.target.value };
                    })
                  }
                  disabled
                />
                <label
                  htmlFor="name"
                  className="title2"
                  style={{ width: "35%" }}
                >
                  Amount :
                </label>
                <input
                  type="text"
                  value={detail.amount}
                  placeholder="Amount to send"
                  className="input-field"
                  style={{ width: "60%" }}
                  onChange={(event) =>
                    setDetail((prevState) => {
                      return { ...prevState, amount: event.target.value };
                    })
                  }
                />
                <label
                  htmlFor="name"
                  className="title2"
                  style={{ width: "35%" }}
                >
                  Message :
                </label>
                <input
                  type="text"
                  value={detail.message}
                  placeholder="Hi this is your birthday's gift."
                  className="input-field"
                  style={{ width: "60%" }}
                  onChange={(event) =>
                    setDetail((prevState) => {
                      return { ...prevState, message: event.target.value };
                    })
                  }
                />
              </>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            className="btn"
            style={{ backgroundColor: colors.primary2 }}
          >
            Cancel
          </Button>
          {btnTitle === "Search User" ? (
            <Button onClick={searchUser}>{btnTitle}</Button>
          ) : (
            <Button onClick={sendMoney}>{btnTitle}</Button>
          )}
        </Modal.Footer>
      </Modal>
      <DoneComponent
        data={status}
        error={error}
        show={isModal}
        onHide={() => setIsModal(false)}
      />
    </>
  );
}

export default SendMoneyModal;
