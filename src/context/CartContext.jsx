import { createContext, useState } from "react";

// Creamos un contexto de Recat llamado CarContext

const CartContext = createContext();

// Creamos un componente llamado CartProvider que servira como proveedor del contexto.

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const añadirProducto = (producto) => {
    // Agregamos el producto al carrito si no existe en él, sino lo actualizamos a la cantidad deseada.

    const condicion = estaEnElCarrito(producto.id);
    if (condicion) {
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === producto.id) {
          return {
            ...productoCarrito,
            Cantidad: productoCarrito.cantidad + producto.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(productosModificados);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnElCarrito = (idProducto) => {
    return carrito.some((producto) => producto.id === idProducto);
  };

  const totalCantidad = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };

  const totalPrecio = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  };
  const borrarCarrito = () => {
    setCarrito([]);
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (producto) => producto.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        añadirProducto,
        totalCantidad,
        borrarCarrito,
        borrarProducto,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
