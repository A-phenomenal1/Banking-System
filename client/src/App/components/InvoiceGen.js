import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import colors from "../../config/colors";

function InvoiceGen(props) {
  const [detail, setDetail] = useState({});
  const [error, setError] = useState({ isError: false, error: "" });
  const [time, setTime] = useState({ date: "", clockTime: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5000/searchTransac/" + props.id)
      .then((response) => {
        setDetail(response.data);
        setError({ isError: false, error: "" });
        setTime({
          date: response.data.createdAt.substr(0, 10),
          clockTime: response.data.createdAt.substr(11, 8),
        });
      })
      .catch((e) => setError({ isError: true, error: "Network Error." }));
  }, []);

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("img/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("invoice" + detail.senderAccountNo + ".pdf");
      })
      .catch((e) => {
        alert("Download Unsuccessful");
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ backgroundColor: colors.light3 }} id="divToPrint">
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center title"
          >
            Invoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Sender Account No :</label>
              <label style={{ width: "45%" }}>{detail.senderAccountNo}</label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Sender Name :</label>
              <label style={{ width: "45%" }}>{detail.sender}</label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Receiver Account No :</label>
              <label style={{ width: "45%" }}>{detail.receiverAccountNo}</label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Sender Contact No :</label>
              <label style={{ width: "45%" }}>{detail.senderContactNo}</label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Transaction Amount :</label>
              <label style={{ width: "45%" }}>$ {detail.transferAmt}</label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "45%" }}>Date & Time :</label>
              <label style={{ width: "45%" }}>
                {time.date} &{time.clockTime}
              </label>
            </div>
            <div
              style={{ width: "100%", textAlign: "center " }}
              className="title2"
            >
              <label style={{ width: "35%" }}>Message :</label>
              <label
                style={{ width: "55%", fontWeight: 500, fontSize: "0.9em" }}
              >
                {detail.message}
              </label>
            </div>
            {error.isError ? (
              <div
                style={{ width: "100%", textAlign: "center " }}
                className="title2"
              >
                {error.error}
              </div>
            ) : null}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            className="btn"
            style={{ backgroundColor: colors.primary2 }}
          >
            Cancel
          </Button>
          <Button onClick={printDocument}>Download</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default InvoiceGen;
