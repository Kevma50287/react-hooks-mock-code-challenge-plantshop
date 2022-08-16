import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  //create useState and useEffect to store data from initial API fetch
  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(d => setPlantData(d))
  }, [])

  const postPlantData = (plant) => {
    setPlantData([...plantData, plant])
  }

  const handleSearch = (text) => {
    setSearch(text)
  }

  return (
    <main>
      <NewPlantForm postPlantData={postPlantData} />
      <Search handleSearch={handleSearch} />
      <PlantList plantData={plantData} search={search} />
    </main>
  );
}

export default PlantPage;
