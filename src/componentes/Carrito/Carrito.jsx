import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../Carrito/Carrito.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, borrarCarrito, totalPrecio, borrarProducto } =
    useContext(CartContext);
  if (carrito.length === 0) {
    return (
      <div className="carritoVacio">
        <h2> Opps, el carrito esta vacio 😢</h2>
        <Link to="/">Volver al Inicio</Link>
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
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio por unidad: {producto.precio}</p>

            <button
              className="delete"
              onClick={() => borrarProducto(producto.id)}
            >
              Eliminar producto
            </button>
          </li>
        ))}
      </ul>
      <p>Total a pagar: ${totalPrecio()}</p>
      <Link to="/checkout">Finalizar mi compra 😍</Link>
      <button className="delete" onClick={borrarCarrito}>
        Eliminar Carrito
      </button>
    </div>
  );
};
export default Carrito;
