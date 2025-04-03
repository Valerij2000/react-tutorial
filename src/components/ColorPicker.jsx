import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  return (
    <div className="card shadow-sm p-3 m-4" style={{ maxWidth: "300px" }}>
      <div className="card-body text-center">
        <h3 className="card-title mb-3">Color Picker</h3>

        <div
          className="rounded mb-3 p-4 border"
          style={{
            backgroundColor: color,
            transition: "background-color 0.3s ease",
          }}
        >
          <p
            className="mb-0 text-white"
            style={{ textShadow: "1px 1px 2px #000" }}
          >
            Selected Color: {color}
          </p>
        </div>

        <input
          type="color"
          className="form-control form-control-color mb-3"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          title="Choose your color"
        />

        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            onClick={() => navigator.clipboard.writeText(color)}
          >
            Copy Color Code
          </button>
        </div>
      </div>
    </div>
  );
}
