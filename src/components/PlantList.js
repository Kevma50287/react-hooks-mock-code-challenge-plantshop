import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData = [], search=''}) {

  const searchPlantData = plantData.filter((plant) => {
    if (search.length > 0) {return plant.name.toLowerCase().includes(search.toLowerCase())}
    else {return true}
  })

  const plantArr = searchPlantData.map((plant) => {
    return (
      <PlantCard key={plant.id} plant={plant} />
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
