import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import bankLogo from "../../assets/bankLogo.jpeg";
import colors from "../../config/colors";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: colors.primary1 }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={bankLogo} className="logo" alt="" />
            <div className="branding" style={{ color: colors.light1 }}>
              SELF CARE BANK
            </div>
          </Link>
          <div className="spacer" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-bars" style={{ color: colors.light3 }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto col-md-12"
              style={{ marginRight: "10%" }}
            >
              <Link to="/" className="nav-item nav-li">
                <li className="nav-link text-light">Home</li>
              </Link>

              <Link to="/customers" className="nav-item nav-li">
                <li className="nav-link text-light">Customers</li>
              </Link>

              <Link to="/transactions" className="nav-item nav-li">
                <li className="nav-link text-light">Transactions</li>
              </Link>

              <li className="nav-item nav-li">
                <button
                  className="nav-link"
                  style={{ color: colors.primary2 }}
                  href="#"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
