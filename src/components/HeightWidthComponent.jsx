import React, { useState, useEffect } from "react";

function HeightWidthComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize); //? removes the event listener when component unmounts or no longer needed
      console.log("EVENT LISTENER REMOVED");
    };
  }, [width, height]);

  useEffect(() => {
    //? we can use more than one useEffect hooks for different side effects
    console.log("Component Rendered");
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      //? we can add cleanup function to remove event listener when component unmounts
      console.log("Component Unmounted");
    };
  }, []); //? runs only once when component mounts

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // window.addEventListener("resize", handleResize);
  // console.log("EVENT LISTENER ADDED"); //! there were more than 10000 event listeners added to the window object, which caused performance issues

  return (
    <div className="center m-3">
      <div className="d-inline-flex p-2 bd-highlight gap-3">
        <p
          className="badge bg-primary text-wrap d-flex justify-content-center align-items-center fs-6"
          style={{ width: "12rem", height: "4rem" }}
        >
          Width: {width}px
        </p>
        <p
          className="badge bg-primary text-wrap d-flex justify-content-center align-items-center fs-6"
          style={{ width: "12rem", height: "4rem" }}
        >
          Height: {height}px
        </p>
      </div>
    </div>
  );
}

export default HeightWidthComponent;
