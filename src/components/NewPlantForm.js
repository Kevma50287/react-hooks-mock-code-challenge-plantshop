import React, { useState } from "react";

function NewPlantForm({postPlantData}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "0.00"
  })

  const handleNewPlant = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewPlant({ ...newPlant, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(d => postPlantData(d))
      .catch(err => console.log(err))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleNewPlant} />
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleNewPlant} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleNewPlant} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
