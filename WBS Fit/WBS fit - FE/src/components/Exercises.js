import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "../styles.css";

import Footer from "./Footer";

import Navbar from "./Navbar";
import { useUtils } from "../context/UtilContext";

const Exercises = ({ onChoose, data }) => {
  const serverURL = useUtils();

  const { equipment, muscle } = useParams();

  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    fetch(`${serverURL}/exercise/${equipment}/${muscle}`)
      .then((res) => res.json())
      .then((data) => setExerciseData([...data]));
  }, [equipment, muscle, serverURL]);

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="blank"></div>

        <div className="topic">
          create <span>workout</span>
        </div>

        <div className="container">
          <div id="chosenEquipment">{equipment}</div>
          <div id="chosenMusclegroup">{muscle}</div>
          {exerciseData &&
            exerciseData.map((exercise, i) => (
              <Fragment key={i}>
                <div id="showExercise" key={exercise._id}>
                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      marginRight: "5px",
                    }}
                  >
                    <img
                      src={exercise.avatar}
                      alt="exercise"
                      style={{
                        display: "flex",
                        AlignSelf: "center",
                        width: "55px",
                        height: "55px",
                        borderRadius: "15px",
                        border: "2px solid #262626",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center", //horizontal

                      color: "#fff",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    {/* {exercise._id}
                  <br /> */}
                    {exercise.name}

                    <div
                      className="exerciseSelectMore"
                      style={{
                        color: "#898989",
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center", //horizontal
                        alignContent: "flex-end",
                        paddingTop: "5px",
                      }}
                    >
                      more info <span>|</span> how to do it
                    </div>
                  </div>
                  <div className="exerciseSelectLink">
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "10px 0px",
                        marginLeft: "5px",
                        backgroundColor: "#00a0e3",
                        color: "#fff",
                      }}
                      onClick={() => onChoose([...data, exercise])}
                    >
                      <Link to={`/create`}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Link>
                    </button>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exercises;
