import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import Footer from "./Footer";
import Spacer from "../components/Spacer";
import Navbar from "../components/Navbar";
import { useUtils } from "../context/UtilContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Browse = () => {
  const serverURL = useUtils();

  const { workouttype } = useParams();
  //   console.log("component browse.js -> wo type : ", workouttype);

  const [browsedData, setBrowsedData] = useState(null);

  useEffect(() => {
    fetch(`${serverURL}/browse/${workouttype}`)
      .then((res) => res.json())
      //   .then((res) => console.log("browsedata :", res));
      .then((data) => setBrowsedData(data));
  }, [workouttype, serverURL]);

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div
          id="blank"
          style={{ display: "flex", flexDirection: "column" }}
        ></div>
        <div style={{ height: "25px" }}></div>
        <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
          <span style={{ color: "#00a0e3" }}>{workouttype}</span> workouts
        </div>
        {browsedData &&
          browsedData.map((item) => (
            <Fragment key={item._id}>
              {/* {console.log("standardSet : ", item.standardSet)}
              <div key={`workoutType${i}`}>{workouttype}</div>
              <Spacer />
              <div key={`itemName${i}`}>{item.name}</div>
              <div key={`itemPic${i}`}>{item.picture}</div>
              <div key={`itemId${i}`}>{item._id}</div>
              <div key={`desc${i}`}>{item.description}</div>
              <div key={`creator${i}`}>{item.creator}</div>
              {item.standardSet.map((eachSet) => (
                <div>{eachSet.reps}</div>
              ))} */}
              <div className="showBrowseWorkout">
                <div className="showBrowseWorkoutImage">
                  <img src={item.picture} alt={item.name} />
                </div>

                <div className="showBrowseWorkoutInfo">
                  <div className="showBrowseWorkoutName">{item.name}</div>
                  <div className="showBrowseWorkoutDesc">
                    {item.description}
                  </div>
                </div>
                <div className="showBrowseAdd" style={{ width: "35px" }}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <Spacer />
            </Fragment>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Browse;
