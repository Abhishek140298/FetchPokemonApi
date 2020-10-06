import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokmon.css";

const Pokmon = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [moves, setMoves] = useState([]);
  const [image, setImage] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      setName(res.data.name);
      setMoves(res.data.moves);
      setImage(res.data.sprites.front_default);
    }
    getData();
  });
  const selectId = (event) => {
    const numSelect = event.target.value;
    setId(numSelect);
  };
  console.log(id);
  return (
    <div className="main_div">
      <h1>Pokemon</h1>
      <div className="select_div">
        <h4>Select PokemonId</h4>
        <select className="id_select" type="text" onChange={selectId}>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="name_div">{`Name of the Pokemon ${name}`}</div>
      <img src={image} />
      <div className="moves_div">{`Moves of Pokemon ${moves.length}`}</div>
    </div>
  );
};

export default Pokmon;
