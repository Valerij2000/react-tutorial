import React, { useState } from "react";
import { carsData } from "../db/cars";

export default function Cars() {
  const [car, setCar] = useState({
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Car Form {car.make}</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="make" className="form-label">
                Make
              </label>
              <input
                type="text"
                className="form-control"
                id="make"
                name="make"
                value={car.make}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                id="model"
                name="model"
                value={car.model}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                className="form-control"
                id="year"
                name="year"
                value={car.year}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                value={car.color}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Car List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {carsData.map((car, index) => (
                <tr key={index}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
