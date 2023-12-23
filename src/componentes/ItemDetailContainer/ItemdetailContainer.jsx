import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import obtenerProductos from "../utilidades/data";
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/ItemDetailContainer.css";
("../utilidades/data");

const ItemdetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    obtenerProductos.then((respuesta) => {
      const productoEncontrado = respuesta.find(
        (prod) => prod.id === Number(id)
      );
      setProducto(productoEncontrado);
    });
  }, []);

  return (
    <div className="detalleProd">{<ItemDetail producto={producto} />}</div>
  );
};

export default ItemdetailContainer;
