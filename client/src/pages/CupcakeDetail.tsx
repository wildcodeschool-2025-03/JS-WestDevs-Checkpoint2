import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetail() {
  const { id } = useParams();

  const [cupcake, setCupcake] = useState();

  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcake(data));
  }, [id]);

  if (cupcake) return <Cupcake data={cupcake} />;
}

export default CupcakeDetail;
