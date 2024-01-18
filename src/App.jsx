import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemdetailContainer from "./componentes/ItemDetailContainer/ItemdetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito/Carrito";
import Footer from "./componentes/Footer/footer";
import Checkout from "./componentes/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Five Nights at Freddy's Gifts" />
            }
          />
          <Route
            path="/categoria/:categoria"
            element={<ItemListContainer saludo="Let's play/Let's eat" />}
          />
          <Route path="/detalle/:id" element={<ItemdetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/productos"
            element={<ItemListContainer saludo="Complete Catalog - FNaF " />}
          />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
