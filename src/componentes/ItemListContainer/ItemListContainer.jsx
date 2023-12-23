//obtenemos los productos desde el archivo data en utilidades y los pasamos a ItemList.

import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/itemList";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  // Funcion para cargar los productos al inicio

  const { categoria } = useParams();

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const productosFiltrados = respuesta.filter(
            (producto) => producto.categoria === categoria
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizo la Promesa");
      });
  }, [categoria]);
  /// Utilizamos el hook UseEffect para evitar que se renderizo multiples veces el renderizado del componente...(cada 2000 milisegundos.)

  return (
    <div className="itemListContainer">
      <p className="tituloSaludo">{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
