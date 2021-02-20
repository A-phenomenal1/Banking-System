import React from "react";

import "./components/Home.css";
import colors from "../config/colors";
import TransacTable from "./components/TransacTable";

function CustomerHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="content mt-5">
          <div className="title mt-5" style={{ color: colors.primary3 }}>
            All Transaction Records
          </div>
          <div className="container m-5">
            <TransacTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;
