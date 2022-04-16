import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Catalogo from "./components/Catalogo";
import Saludo from "./components/Saludo";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="acá esta el ItemListContainer :)" />
    </div>
  );
}

export default App;
