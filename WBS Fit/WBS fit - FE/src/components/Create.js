import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import "../styles.css";
import Footer from "./Footer";
import Spacer from "./Spacer";
import Navbar from "./Navbar";
import dumbbell from "../img/dumbbell.png";
import { useUtils } from "../context/UtilContext";

const Create = ({ data }) => {
  const serverURL = useUtils();
  const history = useHistory();

  const [equipmentData, setEquipmentData] = useState(null);
  const [workoutName, setWorkoutName] = useState(null);
  const [workoutType, setWorkoutType] = useState(null);
  const [specs, setSpecs] = useState([
    {
      exercise_id: "",
    },
  ]);

  useEffect(() => {
    if (data) {
      const exercises = data.map((item) => ({
        exercise_id: item._id,
        exercise_avatar: item.avatar,
        exercise_name: item.name,
      }));
      setSpecs(exercises);
      console.log(exercises);
    }
  }, [data]);

  const handleChange = (event, id) => {
    console.log({ targetId: id });
    // setSpecs({ ...specs, [event.target.name]: event.target.value });
    // let targetExercise
    const targetExercise = specs.find((e) => e.exercise_id === id);
    // if (!targetExercise)
    targetExercise[event.target.name] = event.target.value;
    // const restOfTheExercises = specs.filter(e => e.exercise_id != id)
    setSpecs([...specs.filter((e) => e.exercise_id !== id), targetExercise]);

    console.log(specs);
  };
  // setSpecs({ ...specs, exercise_id: data[0]._id });

  // if (data[0] !== null) {
  // const setExId = (id) => {
  //   setSpecs({ ...specs, exercise_id: id });
  // };

  // useEffect(() => {
  //   console.log("ue : ", data);
  //   if (data) {
  //     setSpecs({ ...specs, exercise_id: data[0]._id });
  //   }
  // }, [data]);

  // }

  useEffect(() => {
    fetch(`${serverURL}/equipment`)
      .then((res) => res.json())
      .then((equipData) => {
        setEquipmentData(equipData);
      });
  }, [serverURL]);

  const printValues = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // console.log("outta printvalues : ", workoutName);
    // console.log("outta printvalues : ", workoutType);
    // console.log("outta printvalues : ", data);
    const selectedExercises = [];
    data.forEach((item) => selectedExercises.push(item._id));
    // console.log(selectedExercises);
    // setSpecs({ ...specs, exercise_id: data[0]._id });
    console.log("specs : ", specs);
    console.log("selExs : ", selectedExercises);
    const raw = JSON.stringify({
      name: `${workoutName}`,
      picture: "http://www.mischgeburten.net/17.png",
      description: "Just a workout",
      wo_type: workoutType,
      exercises: selectedExercises,
      standardSet: specs,
      ratings: "0",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: window.location.replace(`${serverURL}/dashboard`),
    };

    fetch(`${serverURL}/workout/add`, requestOptions)
      .then(() => history.push("/success"))
      // .then(() => history.push("/dashboard"))
      .catch((error) => console.log("error", error));
  };
  // console.log(data.length);
  // console.log("data : ", data[0]._id);
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="blank"></div>
        <div className="topic">
          create <span>workout</span>
        </div>
        {/* {data === null || data.length < 1 ? null : setExId(data[0]._id)} */}
        <div className="container">
          {equipmentData &&
            equipmentData.map((equipment, i) => (
              <div key={equipment}>
                <button>
                  <Link to={`/create/${equipment}`} key={i}>
                    {equipment}
                  </Link>
                </button>
              </div>
            ))}
        </div>
        {data.length !== 0 && (
          <>
            <Spacer />

            <div className="topic">
              chosen <span>exercise</span>
            </div>

            <div className="container" style={{ flexDirection: "column" }}>
              {data.map((item) => {
                console.log(item._id);
                return (
                  <Fragment key={item._id}>
                    <div
                      className="setRoutineExerciseName"
                      style={{ textAlign: "left", paddingLeft: "0px" }}
                    >
                      <img src={dumbbell} alt="icon" />
                      {item.name}
                    </div>
                    <div
                      className="setRoutine"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingLeft: "70px",
                        // border: "1px solid #f0f",
                      }}
                    >
                      <span>sets</span>{" "}
                      <input
                        style={{ width: "25px" }}
                        type="text"
                        min="1"
                        max="21"
                        placeholder="-"
                        name="sets"
                        onChange={(e) => handleChange(e, item._id)}
                      />
                      <span>weight</span>
                      <input
                        style={{ width: "25px" }}
                        type="text"
                        min="1"
                        max="100"
                        placeholder="-"
                        name="weight"
                        onChange={(e) => handleChange(e, item._id)}
                      />
                      <span>reps</span>
                      <input
                        style={{ width: "25px" }}
                        type="text"
                        min="1"
                        max="400"
                        placeholder="-"
                        name="reps"
                        onChange={(e) => handleChange(e, item._id)}
                      />
                      {/* <input
                      style={{ width: "25px" }}
                      min="1"
                      max="180"
                      type="text"
                      placeholder="60"
                      name="pause"
                      onChange={(e) => handleChange(e)}
                    />
                    pause */}
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <Spacer />
            <form onSubmit={printValues}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "space-between",
                  alignItems: "center",

                  justifyContent: "flex-start",
                  width: "350px",
                }}
              >
                <div
                  style={{
                    paddingRight: "10px",
                  }}
                >
                  give it a name
                </div>

                <div className="enter">
                  <input
                    id="nameWorkout"
                    name="nameWorkout"
                    maxLength="15"
                    onChange={(event) => setWorkoutName(event.target.value)}
                    type="text"
                    placeholder="put name here"
                  />
                </div>
              </div>
              <div id="checkboxes">
                <input
                  type="checkbox"
                  value="beginner"
                  name="beginner"
                  checked={workoutType === "beginner"}
                  onChange={(event) => setWorkoutType(event.target.value)}
                />
                <span>beginner</span>
                <input
                  type="checkbox"
                  value="advanced"
                  name="advanced"
                  checked={workoutType === "advanced"}
                  onChange={(event) => setWorkoutType(event.target.value)}
                />
                <span>advanced</span>
                <input
                  type="checkbox"
                  value="beast"
                  name="beast"
                  checked={workoutType === "beast"}
                  onChange={(event) => setWorkoutType(event.target.value)}
                />
                <span>beast</span>
              </div>
              <div>
                <input type="submit" id="saveButton" value="save workout" />
              </div>
            </form>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Create;
