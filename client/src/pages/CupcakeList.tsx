import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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
interface CupcakeData {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [arrayOfCupcakes, setArrayOfCupcakes] = useState<CupcakeData[]>([]);
  const [accessories, setAccessoiries] = useState<AccessoryArray>([]);

  console.log("Voici arrayOfCupacakes", arrayOfCupcakes);

  console.log("Voici les accesoires", accessories);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setArrayOfCupcakes(data));
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessoiries(data as AccessoryArray));
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
            {accessories.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {arrayOfCupcakes.map((el) => (
          <li className="cupcake-item" key={el.id}>
            <Cupcake data={el} />
          </li>
        ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
