import { useEffect, useState } from "react";
// import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

interface CupcakeListProps {
  id: number;
}

function CupcakeList() {
  const [cupCakes, setCupCakes] = useState<CupcakeListProps[]>([]);

  // Step 1: get all cupcakes
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupCakes(data));
  }, []);
  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupCakes.map((el) => (
          <li key={el.id} className="cupcake-item">
            {/* <Cupcake data={el} /> */}
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
