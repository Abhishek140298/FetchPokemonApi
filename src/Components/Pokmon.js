import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokmon = () => {
  const [id, setId] = useState(1);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(res);
    }
    getData();
  }, []);
  const selectId = (event) => {
    const numSelect = event.target.value;
    setId(numSelect);
  };
  console.log(id);
  return (
    <>
      <h1>You selected {id}</h1>
      <select type="text" onChange={selectId}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Pokmon;
