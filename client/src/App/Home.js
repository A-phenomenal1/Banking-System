import React from "react";
import { Link } from "react-router-dom";

// import "./components/Home.css";
import colors from "../config/colors";
// import CustomerHome from "./CustomerHome";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      <div className="section col-xs-12">
        <div className="background col-xs-12" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-12 ">
                <div className="p-5 bg-transparent">
                  <h2
                    className="heading"
                    style={{ color: colors.primary3 }}
                    data-aos="zoom-in"
                  >
                    Self Care BanK
                  </h2>
                  <div
                    className="carousel slide"
                    id="carouselExampleIndicators"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators mb-0">
                      <li
                        className="active"
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner px-md-5 pb-md-4 pt-md-2">
                      <div className="carousel-item active">
                        <div className="media">
                          <div className="media-body ml-3">
                            <blockquote
                              className="blockquote border-2 p-0"
                              style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                              }}
                            >
                              <p
                                className=" para"
                                style={{
                                  color: colors.secondary1,
                                }}
                              >
                                <i
                                  className="fa fa-quote-left mr-md-3"
                                  style={{ color: "#3CE02F" }}
                                ></i>
                                Safe Your Money
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="media">
                          <div className="media-body ml-3 ">
                            <blockquote
                              className="blockquote border-0 p-0"
                              style={{ textAlign: "center" }}
                            >
                              <p
                                className="para"
                                style={{
                                  color: colors.secondary1,
                                }}
                              >
                                <i
                                  className="fa fa-quote-left mr-3"
                                  style={{ color: "#3CE02F" }}
                                ></i>
                                At A Good Interest Rate
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="media">
                          <div className="media-body ml-3">
                            <blockquote
                              className="blockquote border-0 p-0"
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <p
                                className="para"
                                style={{
                                  color: colors.secondary1,
                                }}
                              >
                                <i
                                  className="fa fa-quote-left mr-3"
                                  style={{
                                    color: "#3CE02F",
                                  }}
                                ></i>
                                Good Investment Policies
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3
            className="sign"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1200"
            style={{ color: "#2c061f" }}
          >
            <strong>Developer: </strong>
            <i>
              <span> Nitesh Kumar </span>
            </i>
          </h3>
          <div className="btn-container mt-3">
            <Link to="/customers" className="scroll-to">
              <div
                className="btn"
                style={{
                  backgroundColor: colors.primary2,
                  color: colors.light1,
                }}
              >
                Let's CatchUp
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Home2 />
      {/* <TransactionHome /> */}
    </>
  );
}

export default Home;
