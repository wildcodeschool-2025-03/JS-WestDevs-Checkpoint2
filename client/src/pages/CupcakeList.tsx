import { type ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import type { AccessCupcake, Cupcakes } from "../types";

/* ************************************************************************* */
// const sampleCupcakes: CupcakeArray = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcake, setCupcake] = useState<Cupcakes[]>([]);
  const [accessorie, setAccessorie] = useState<AccessCupcake[]>([]);
  const [selectedAccess, setSelectedAccess] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedAccess(e.target.value);
  // Step 1: get all cupcakes
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcake(data));
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessorie(data));
  }, []);

  // Step 5: create filter state
  const filterAcess = cupcake.filter((access) =>
    access.accessory.toLowerCase().includes(selectedAccess.toLowerCase()),
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessorie.map((el) => (
              <option key={el.id} value={el.slug}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filterAcess.map((el) => (
          <li className="cupcake-item" key={el.id}>
            <Link to={`/cupcakes/${el.id}`}>
              <Cupcake data={el} />
            </Link>
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
