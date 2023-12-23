import "./App.css";
import ItemdetailContainer from "./componentes/ItemDetailContainer/ItemdetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo="Five Nights at Freddy's Gifts" />}
        />
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer saludo="Five Nights at Freddy's Gifts" />}
        />
        <Route path="/detalle/:id" element={<ItemdetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
