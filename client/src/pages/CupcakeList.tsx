import { Fragment, useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
import type { CupcakeI } from "../types";
/* ************************************************************************* */

type AccessoryArray = {
  id: number;
  name: string;
  slug: string;
}[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeI[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data.message));
  }, []);

  useEffect(() => {
    fetch(" http://localhost:3310/api/accessories ")
      .then((response) => response.json())
      .then((data) => setAccessories(data.message));
  }, []);

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
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((el) => {
          return <Cupcake key={el.id} data={el} />;
        })}

        {accessories.map((accessory) => {
          return (
            <Fragment key={accessory.id}>
              <p>{accessory.name}</p>
            </Fragment>
          );
        })}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={cupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
export default CupcakeList;
