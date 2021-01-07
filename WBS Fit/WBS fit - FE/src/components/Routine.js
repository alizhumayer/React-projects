import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import "../styles.css";
import Footer from "./Footer";
import MeContext from "../context/MeContext";

import Navbar from "../components/Navbar";
import Burger from "../img/burger.png";
import Timer from "../img/timer.png";

const Browse = () => {
  const me = useContext(MeContext);

  const { routineId } = useParams();

  const found = me.wo_routine.find((element) => element._id === routineId);

  console.log("found : ", found);

  // const showSets = (objekt) => {
  //   if (found) {
  //     // console.log("objekt : ", objekt);
  //     const result = [];
  //     let arrayOfSets = new Array(objekt.sets);
  //     // console.log(arrayOfSets);
  //     for (let set = 0; set < arrayOfSets.length; set++) {
  //       console.log(`test ${set}`, found.exercises[set].avatar);

  //       result.push(
  //         <>
  //           <div style={{ display: "flex", flexDirection: "row" }}>
  //             <div>set {set + 1} </div>
  //             <div>reps {objekt.reps} </div>
  //             <div>weight {objekt.weight} </div>
  //             {/* {/* <div>avatar {found.exercises[set].avatar} </div> */}
  //             <div>{found.exercises[set].name} </div>
  //           </div>
  //         </>
  //       );
  //       //console.log("weight", objekt.weight);
  //     }
  //     return result;
  //   }
  // };

  const showStuff = (sets, weight, reps) => {
    let newArray = [];
    for (let x = 0; x < sets; x++) {
      newArray.push({ set: x + 1, weight, reps });
    }

    return newArray.map((item, index) => (
      <>
        <div className="routinesSetLine">
          <div className="routinesValueSet">
            set <span>{item.set}</span>
          </div>
          <div className="routinesValueWeight">
            weight <span>{item.weight}</span>
          </div>
          <div className="routinesValueReps">
            reps <span>{item.reps}</span>
          </div>
          <div className="routinesValueCheck">
            <input type="checkbox" />
          </div>
        </div>
        <div className="routinesHr" />
      </>
    ));
    // console.log(newArray);
  };
  // console.log(sets, weight, reps);

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div
          id="blank"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-3px",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          <div
            className="dashTopic"
            style={{ fontSize: "18px", padding: "5px" }}
          >
            your <span>routine</span>
          </div>
          <div
            className="dashTopic"
            style={{ fontSize: "18px", padding: "5px" }}
          >
            60 <span>-</span> 90 <span>-</span> 120{" "}
            <img
              src={Timer}
              alt="timer"
              style={{ height: "14px", margin: "0px 5px" }}
            />
          </div>
        </div>
        <div className="routineWorkoutContainer">
          <div className="routineWorkoutPic">
            <img src={found.picture} alt="routineWorkout" />
          </div>
          <div className="routineWorkoutName">
            {found.name}
            <span>{found.description}</span>
          </div>
        </div>
        <div className="routineStart">start</div>

        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {found &&
            found.standardSet.map((each, i) => (
              <>
                <div className="routineSetsContainer">
                  <div className="routineSetInfo">
                    <div className="routineSetsName">
                      <img src={Burger} alt="Burger" />
                      {each.exercise_name}
                    </div>
                  </div>
                  <div className="routineSetsValues">
                    <div className="routinesSetPic">
                      <img
                        src="https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-22b-wide-grip-barbell-curl-m1-square-600x600.jpg"
                        alt="routine"
                      />
                    </div>
                    <div className="routinesSets">
                      {showStuff(each.sets, each.weight, each.reps)}
                    </div>
                  </div>
                </div>
              </>
            ))}

          <div
            style={{
              height: "20px",
            }}
          ></div>

          <div style={{ height: "20px" }}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
