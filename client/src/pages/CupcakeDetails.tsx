import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import type { Cupcakes } from "../types";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<Cupcakes>();
  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcake(data));
  }, [id]);
  if (!cupcake) return <h1>Chargement...</h1>;

  return (
    <>
      <h1>Nom du pays : {cupcake.name}</h1>
      <h2>Couleur N°1 : {cupcake.color1}</h2>
      <h3>Couleur N°2 : {cupcake.color2}</h3>
      <h4>Couleur N°3 : {cupcake.color3}</h4>
      <p> Accessoire : {cupcake.accessory}</p>
      <Cupcake data={cupcake} />
    </>
  );
}

export default CupcakeDetails;
