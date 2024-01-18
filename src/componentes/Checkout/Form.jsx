import "./Checkout.css";
const Form = ({ datosForm, guardarDatosinput, enviarOrden }) => {
  return (
    <div className="ordenCompra">
      <p>Complete the following form to generate the Purchase Order</p>
      <form className="formCompra" onSubmit={enviarOrden}>
        <label htmlFor="nombre">Full name</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="telefono">Telephone</label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={datosForm.email}
          onChange={guardarDatosinput}
          required
        />
        <label htmlFor="emailConfirm">Confirm Email</label>
        <input
          type="email"
          name="emailConfirm"
          id="email"
          value={datosForm.emailConfirm}
          onChange={guardarDatosinput}
          required
        />
        <button className="enviarOrdenBt" type="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Form;
