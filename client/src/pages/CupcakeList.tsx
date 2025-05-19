import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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

function CupcakeList() {
  const [arrayOfCupcakes, setArrayofCupcakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setArrayofCupcakes(data.message));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {arrayOfCupcakes.map((el) => {
            return <Cupcake key={el} data={el} />;
          })}

          <select id="cupcake-select">
            <option value="">---</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
      </ul>
    </>
  );
}

export default CupcakeList;
