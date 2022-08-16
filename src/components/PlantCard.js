import React, { useState } from "react";

function PlantCard({plant}) {
  const {name, image, price, id} = plant
  const [stockToggle, setStockToggle] = useState(true)

  const handleToggle = () => {
    const tog = !stockToggle
    setStockToggle(tog)
  }
  return (
    <li className="card">
      <img src={image ? image : "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockToggle ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
