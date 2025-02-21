"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

export default function CompContext() {
  const [user, setUser] = useState<string>("Andi");

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{user}</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
}
 // props drilling
function Component2() {
  return (
    <div>
      {/* <h1>{`Hello ${name}`}</h1> */}
      <Component3 />
    </div>
  );
}

function Component3() {
  const name = useContext<string>(UserContext);
  return (
    <div>
      <h2>{`Hello ${name} - 2`}</h2>
    </div>
  );
}
