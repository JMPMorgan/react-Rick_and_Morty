import CharacterList from "./Components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white w-100">
      <h1 className="text-center display-1 mb-4 fw-bolder">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
