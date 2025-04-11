import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState({ name: "John Doe" });
  return (
    <div className="box text-primary">
      ComponentA
      <h2>Hello! {user.name}</h2>
      <UserContext.Provider value={user.name}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
