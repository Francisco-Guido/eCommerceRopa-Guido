import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/articulo/:articuloId"
                element={<ItemDetailContainer />}
              ></Route>
              <Route path="/cart" element={<ItemListContainer />}></Route>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
