import { useEffect } from "react";

function Character({ character }) {
  //console.log(character.id, character.name, character.image);
  return (
    <div className="col-4 d-grid justify-content-center">
      <h2 className="align-self-center">{character.name}</h2>
      <img className="rounded" src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;
