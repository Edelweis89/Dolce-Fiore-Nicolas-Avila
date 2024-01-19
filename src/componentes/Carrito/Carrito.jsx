import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, totalPrecio, borrarProducto } =
    useContext(CartContext);
  if (carrito.length === 0) {
    return (
      <div className="carritoVacio">
        <h2>Opps, the cart is empty 😢</h2>
        <Link to="/">Back to Home🏠</Link>
      </div>
    );
  }

  return (
    <div className="CarritoCompra">
      <h1 className="tituloCar"> Detalles de tu Pedido: </h1>
      <ul className="listaCompra">
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img
              className="imgCarrito"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p>{producto.nombre}</p>
            <p>Amount: {producto.cantidad}</p>
            <p>Price by unit: {producto.precio}</p>

            <button
              className="delete"
              onClick={() => borrarProducto(producto.id)}
            >
              Delete product
            </button>
          </li>
        ))}
      </ul>
      <p>Total to pay: ${totalPrecio()}</p>
      <Link to="/checkout">Confirm purchase 😍 😍</Link>
      <button className="delete" onClick={borrarCarrito}>
        Delete Cart
      </button>
    </div>
  );
};
export default Carrito;
