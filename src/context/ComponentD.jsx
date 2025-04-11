import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const userName = useContext(UserContext);
  return (
    <div className="box text-info">
      <h2>Hello! {userName}</h2>
      ComponentD
    </div>
  );
}

export default ComponentD;
