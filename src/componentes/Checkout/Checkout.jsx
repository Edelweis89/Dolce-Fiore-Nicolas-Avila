import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setidOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosinput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();

    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: totalPrecio(),
    };
    subirOrden(orden);
  };

  const subirOrden = (orden) => {
    //Aquí va el código para subir la orden a firebase.
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setidOrden(respuesta.id);
      /// limpiar carrito
      borrarCarrito();
    });
  };
  return (
    <div className="checkout">
      {idOrden ? (
        <div>
          <h2>Orden Generada con Exito 👍</h2>
          <p> El Codigo de Seguimiento de tu Pedido es: {idOrden} 🫡</p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosinput={guardarDatosinput}
          enviarOrden={enviarOrden}
        />
      )}

      <Link className="backInicio" to="/">
        {" Volver al Inicio "}
        🏠
      </Link>
    </div>
  );
};

export default Checkout;
