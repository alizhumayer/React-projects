import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Footer from "./Footer";
// import Spacer from "../components/Spacer";
import Navbar from "../components/Navbar";

const Browse = () => {
  //   console.log("component browse.js -> wo type : ", workouttype);

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div
          id="blank"
          style={{
            marginBottom: "55px",
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
        <Link to={`/dashboard`}>
          <div className="container">
            <div style={{ color: "orange" }}>workout successfully created</div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
