import { useState } from "react";
import TestComp from "../components/TestComp";

const Cleanup = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>axios cancel request</h1>
      <button type="button" onClick={() => setToggle((prev) => !prev)}>
        click me
      </button>
      {toggle && <TestComp />}
    </div>
  );
};

export default Cleanup;
