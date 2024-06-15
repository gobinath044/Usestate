import React, { useState } from "react";

const UseState = () => {
  const [state, setState] = useState(0);
  //   const [name, setName] = useState("arun");
  const [profile, setProfile] = useState({ name: "arun", age: 20 });
  const [array, setArray] = useState([1, 2, 3]);

  return (
    <div>
      <h1>{state}</h1>
      <h1>{profile.name}</h1>
      <h1>{profile.age}</h1>
      <h1>{array.toString()}</h1>
      {/* <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button> */}
      <button
        // onClick={() =>
        //   setArray((oldArr) => {
        //     return [...oldArr, 4];
        //   })
        // }
        onClick={() => setArray((oldArr) => [...oldArr, 4])}
      >
        Change Age
      </button>
    </div>
  );
};

export default UseState;
