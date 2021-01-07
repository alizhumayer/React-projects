import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "../styles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useUtils } from "../context/UtilContext";

const Equipments = (props, { selectedExercise }) => {
  const serverURL = useUtils();

  const { equipment } = useParams();

  const [musclegroupData, setMusclegroupData] = useState(null);

  useEffect(() => {
    fetch(`${serverURL}/exercise/${equipment}/options`)
      .then((res) => res.json())
      .then((data) => setMusclegroupData(data));
  }, [equipment, serverURL]);

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

          {musclegroupData &&
            musclegroupData.map((muscle) => (
              <div key={muscle}>
                <button style={{ width: "165px" }}>
                  <Link to={`/create/${equipment}/${muscle}`}>{muscle}</Link>
                </button>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Equipments;
