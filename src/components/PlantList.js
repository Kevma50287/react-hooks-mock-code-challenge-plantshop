import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData = [], search='', updatePlantData, deletePlant}) {
  const [editID, setEditID] = useState(null)

  const searchPlantData = plantData.filter((plant) => {
    if (search.length > 0) {return plant.name.toLowerCase().includes(search.toLowerCase())}
    else {return true}
  })

  const plantArr = searchPlantData.map((plant) => {
    return (
      <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} updatePlant={updatePlantData} setEditID={setEditID} editID={editID}/>
    )
  })

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantArr}
    </ul>
  );
}

export default PlantList;
