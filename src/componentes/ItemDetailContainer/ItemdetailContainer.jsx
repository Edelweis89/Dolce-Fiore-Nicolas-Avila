import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import db from "../../db/db";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";

import "./ItemDetailContainer.css";

const ItemdetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const productoRef = doc(db, "products", id);
    getDoc(productoRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };
      if (!respuesta.exists()) {
        setProductoExiste(true);
      }
      setProducto(productoDb);
    });
  }, [id]);

  return (
    <div className="detalleProd">
      {productoExiste ? (
        <div> Producto no Existe </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemdetailContainer;
