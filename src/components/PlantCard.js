import React, { useState } from "react";

function PlantCard({ plant, setEditID, editID, updatePlant, deletePlant }) {
  const { name, image, price, id } = plant
  const [stockToggle, setStockToggle] = useState(true)
  const [newVal, setNewVal] = useState(price)


  const handleToggle = () => {
    const tog = !stockToggle
    setStockToggle(tog)
  };

  const handleEdit = (e) => {
    if (id !== editID) { setEditID(id) }
    else if (price !== newVal) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          price: newVal
        })
      }).then(r => r.json())
        .then(d => {
          updatePlant(d)
          setEditID(null)
        })
    } else {
      setEditID(null)
    }
  };

  const handleNewVal = (e) => {
    setNewVal(e.target.value)
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((d) => {
        deletePlant(id)
        console.log(d)
      })
      .catch(err => console.log(err))

  }

  return (
    <li className="card">
      <img src={image ? image : "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      {editID === id ?
        <input type='number' value={newVal} onChange={handleNewVal} step="0.01"></input>
        : <p>Price: {price}</p>
      }
      <button onClick={handleEdit}>{editID === id ? 'Submit' : 'Edit Price'}</button>
      {stockToggle ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>X</button>
    </li>
  );
}

export default PlantCard;
