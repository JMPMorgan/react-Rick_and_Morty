import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      ).then((r) => r.json());
      setCharacters(response.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="align-items-center container pb-4">
      <NavPage actualpage={page} setPage={setPage} />
      <div className="row border border-white rounded ">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <NavPage actualpage={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
