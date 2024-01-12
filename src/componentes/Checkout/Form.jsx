import "./Checkout.css";
const Form = ({ datosForm, guardarDatosinput, enviarOrden }) => {
  return (
    <div className="ordenCompra">
      <p>Completa el siguiente formulario para generar la Orden de Compra</p>
      <form className="formCompra" onSubmit={enviarOrden}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosinput}
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosinput}
        />
        <label htmlFor="email">Correo Electronico</label>
        <input
          type="text"
          name="email"
          id="email"
          value={datosForm.email}
          onChange={guardarDatosinput}
        />
        <button className="enviarOrdenBt" type="submit">
          Enviar Orden
        </button>
      </form>
    </div>
  );
};

export default Form;
