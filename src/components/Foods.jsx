import React, { useState } from "react";

export default function Foods() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFood(food) {
    console.log(foods);
    setFoods([...foods, food]);
    document.getElementById("inputList").value = "";
  }

  function handleRemoveFood(index) {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-primary">List of Food</h2>
      <ul className="list-group">
        {foods.map((food, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="fw-bold">{food}</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleRemoveFood(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            id="inputList"
            className="form-control border-primary shadow-sm"
            placeholder="Add a new food item"
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              if (document.getElementById("inputList").value)
                handleAddFood(document.getElementById("inputList").value);
            }}
          >
            <i className="bi bi-plus-circle me-1"></i>Add
          </button>
        </div>
      </div>
    </div>
  );
}
