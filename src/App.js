import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CountriesContainer from "./components/CountriesContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="acá esta el ItemListContainer :)" />
      {/* <CountriesContainer /> */}
    </div>
  );
}

export default App;
