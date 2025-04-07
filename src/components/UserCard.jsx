import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);
  const [isEmployed, setIsEmployed] = useState(false);
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const getIconForLevel = (level) => {
    switch (level) {
      case "Beginner":
        return "star";
      case "Intermediate":
        return "stars";
      case "Advanced":
        return "star-fill";
      case "Expert":
        return "award";
      default:
        return "question";
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">User Information</h1>

              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    id="nameInput"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setName("Guest")}
                  >
                    Clear
                  </button>
                </div>
              </div>

              <h2 className="text-center mb-3">Hello, {name}!</h2>

              <div className="mb-3">
                <label className="form-label">Age: {age} year(s) old</label>
                <div className="d-grid">
                  <button
                    className="btn btn-primary"
                    onClick={() => setAge(age + 1)}
                  >
                    Increase Age
                  </button>
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="employmentStatus"
                  checked={isEmployed}
                  onChange={(e) => setIsEmployed(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="employmentStatus">
                  Currently Employed
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="occupationSelect" className="form-label">
                  Occupation:
                </label>
                <select
                  id="occupationSelect"
                  className="form-select"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option value="">Select an occupation</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {occupation ? (
                <div className="alert alert-info">
                  You selected: {occupation}
                </div>
              ) : (
                <div className="alert alert-warning">
                  Please select an occupation
                </div>
              )}

              {/* Conditional rendering */}

              {/* {occupation && (
                <div className="alert alert-info" role="alert">
                  You selected: {occupation}
                </div>
              )} */}

              <div className="mb-4">
                <label className="form-label h5 mb-3">Experience Level:</label>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                    (level) => (
                      <div
                        key={level}
                        className="flex-grow-1 flex-shrink-0 flex-basis-0 min-width-100"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id={`experience${level}`}
                          value={level}
                          checked={experience === level}
                          onChange={handleExperienceChange}
                        />
                        <label
                          className="btn btn-outline-primary w-100 text-start"
                          htmlFor={`experience${level}`}
                        >
                          <i
                            className={`bi bi-${getIconForLevel(level)} me-2`}
                          ></i>
                          {level}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {experience && (
                <div className="alert alert-success">
                  <i
                    className={`bi bi-${getIconForLevel(experience)} me-2`}
                  ></i>
                  Your experience level: <strong>{experience}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
