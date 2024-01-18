//obtenemos los productos desde el archivo data en utilidades y los pasamos a ItemList.

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";

import db from "../../db/db";
import ItemList from "../ItemList/itemList";

import { collection, getDocs, query, where } from "firebase/firestore";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState([true]);
  // Funcion para cargar los productos al inicio

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);
    let consulta;
    const productosRef = collection(db, "products");

    if (categoria) {
      // filtrar data
      consulta = query(productosRef, where("categoria", "==", categoria));
    } else {
      // traer toda la data de la db
      consulta = productosRef;
    }
    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() };
        });
        setProductos(productosDb);
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [categoria]);
  /// Utilizamos el hook UseEffect para evitar que se renderizo multiples veces el renderizado del componente...(cada 2000 milisegundos.)

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <PacmanLoader />
        </div>
      ) : (
        <div className="itemListContainer">
          <p className="tituloSaludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
