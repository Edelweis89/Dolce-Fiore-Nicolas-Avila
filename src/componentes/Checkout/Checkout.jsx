import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

// Contexts
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";

import db from "../../db/db";

import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });

  const [idOrden, setidOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosinput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();

    if (datosForm.email === datosForm.emailConfirm) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };
      subirOrden(orden);
    } else {
      Toastify({
        text: "The Emails entered do not match!",

        duration: 3000,
      }).showToast();
    }
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
        <div className="ordenOk">
          <h2>Successfully Generated Order 👍</h2>
          <p>The Tracking Code for your Order is: {idOrden} 🫡</p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosinput={guardarDatosinput}
          enviarOrden={enviarOrden}
        />
      )}

      <Link className="backInicio" to="/">
        {" Return to Home "}
        🏠
      </Link>
    </div>
  );
};

export default Checkout;
