import { type ChangeEvent, useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface Accessories {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<Accessories[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  console.info("C'est quoi, selectedValue ? ", selectedValue);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data));

    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(e.target.value);
  }

  const filteredArray =
    selectedValue !== ""
      ? cupcakes.filter((el) => el.accessory_id === selectedValue)
      : cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{""}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((el) => {
              return (
                <option value={el.id} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredArray.map((el) => {
          return (
            <li key={el.id}>
              <Cupcake data={el} />
            </li>
          );
        })}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
