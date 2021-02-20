import React, { useEffect, useState } from "react";
import Axios from "axios";

import TransacTableRow from "./TransacTableRow";
import InvoiceGen from "./InvoiceGen";

function TransacTable(props) {
  const [state, setState] = useState([]);
  const [isGenerate, setIsGenerate] = useState(false);
  const [id, setId] = useState("");

  const generateInvoice = (id) => {
    setIsGenerate(true);
    setId(id);
  };

  const deleteTransac = (id) => {
    try {
      Axios.delete("http://localhost:5000/deleteTransac/" + id);
      window.location.reload(false);
    } catch (error) {
      alert("Try after Some time...");
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/allTransacs")
      .then((response) => setState(response.data))
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
                Sender Account No
              </th>
              <th scope="col" className="text-center">
                Receiver Account No
              </th>
              <th scope="col" className="text-center">
                Transfer Amount
              </th>
              <th scope="col" className="text-center">
                Date
              </th>
            </>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {state.map((val, key) => {
            return (
              <TransacTableRow
                key={val._id}
                srNo={key + 1}
                id={val._id}
                senderAccountNo={val.senderAccountNo}
                receiverAccountNo={val.receiverAccountNo}
                transferAmt={val.transferAmt}
                createdAt={val.createdAt}
                invoiceCallback={generateInvoice}
                deleteCallback={deleteTransac}
              />
            );
          })}
        </tbody>
      </table>
      {isGenerate ? (
        <InvoiceGen
          show={isGenerate}
          onHide={() => setIsGenerate(false)}
          id={id}
        />
      ) : null}
    </div>
  );
}

export default TransacTable;
