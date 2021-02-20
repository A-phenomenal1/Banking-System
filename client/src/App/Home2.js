import React from "react";
import { Link } from "react-router-dom";

import "./components/Home.css";
import colors from "../config/colors";
import UserTable from "./components/UserTable";

function Home2() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="content mt-5">
          <div className="title mt-5" style={{ color: colors.primary3 }}>
            Customers
          </div>
          <div className="container m-5">
            <UserTable from="home2" />
            <div className="btn-container mt-5">
              <Link to="/customers">
                <div
                  className="btn"
                  style={{
                    backgroundColor: colors.primary2,
                    color: colors.light1,
                  }}
                >
                  See More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
