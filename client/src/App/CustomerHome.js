import React, { useState } from "react";

import "./components/Home.css";
import colors from "../config/colors";
import CreateUserModal from "./components/CreateUserModal";
import UserTable from "./components/UserTable";

function CustomerHome() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="content mt-5">
          <div className="title mt-5" style={{ color: colors.primary3 }}>
            All Customers
          </div>
          <div className="container m-5">
            <UserTable from="customerHome" />
            <div className="btn-container mt-5">
              <div
                className="btn"
                style={{
                  backgroundColor: colors.primary2,
                  color: colors.light1,
                }}
                onClick={() => setIsModal(true)}
              >
                Add Customer
              </div>
            </div>
          </div>
        </div>
        {isModal ? (
          <CreateUserModal show={isModal} onHide={() => setIsModal(false)} />
        ) : null}
      </div>
    </div>
  );
}

export default CustomerHome;
