import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Musclegroup = ({ trainingData }) => {
  const { muscle, equipment } = useParams();
  const [filteredStuff, setFilteredStuff] = useState(null);

  const getExercisesWithMuscles = (data) => {
    const filtered = data.filter(
      (exercise) => exercise.musclegroup[0] === `${muscle}`
    );

    console.log(filtered);
  };

  if (trainingData) {
    let exerciseFilterByEquipment = trainingData.filter(
      (exercise) => exercise.equipment === `${equipment}`
    );

    getExercisesWithMuscles(exerciseFilterByEquipment);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>selected equipment : {equipment}</div>
        <div>selected muscle : {muscle}</div>
        <div>###</div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Musclegroup;
