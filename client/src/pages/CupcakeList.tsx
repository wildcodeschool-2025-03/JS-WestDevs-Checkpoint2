import { useEffect, useState } from "react";
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
interface Cupcakes {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<Cupcakes[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupcakes(data);
      });
  }, []);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  const [selectedAccessory, setSelectedAccessory] = useState("");

  let cupcakesfiltered = [];

  if (selectedAccessory === "") {
    cupcakesfiltered = cupcakes;
  } else {
    for (let i = 0; i < cupcakes.length; i++) {
      if (cupcakes[i].accessory_id === selectedAccessory) {
        cupcakesfiltered.push(cupcakes[i]);
      }
    }
  }
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(event) => setSelectedAccessory(event.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessories) => (
              <option key={accessories.id} value={accessories.id}>
                {accessories.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        <ul>
          {cupcakesfiltered.map((cupcakes) => (
            <li key={cupcakes.id}>{cupcakes.name}</li>
          ))}
        </ul>
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
      </ul>
    </>
  );
}

export default CupcakeList;
