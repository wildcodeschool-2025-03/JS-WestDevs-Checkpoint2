import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

const CupcakeDetails = () => {
  const { id } = useParams();

  const [cupcake, setCupcake] = useState<Cupcake | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCupcake(data);
      });
  }, [id]);

  return (
    <>
      {cupcake && (
        <>
          <Cupcake data={cupcake} />
          <p>Name : {cupcake.name}</p>
          <p>Color 1 : {cupcake.color1}</p>
          <p>Color 2 : {cupcake.color2}</p>
          <p>Color 3 : {cupcake.color3}</p>
        </>
      )}
    </>
  );
};

export default CupcakeDetails;
