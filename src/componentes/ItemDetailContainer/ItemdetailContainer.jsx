import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/ItemDetailContainer.css";
import db from "../../db/db";

const ItemdetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const productoRef = doc(db, "products", id);
    getDoc(productoRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };
      setProducto(productoDb);
    });
  }, [id]);

  return (
    <div className="detalleProd">{<ItemDetail producto={producto} />}</div>
  );
};

export default ItemdetailContainer;
