import { useState } from "react";
import "../ItemCount/Itemcount.css";

const ItemCount = ({ stock }) => {
  // hook de estado : useState

  const [contador, setContador] = useState(1);
  // nos trae dos valores.. el valor del estado y la funcion para modificarlo.

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="Contador">
      <button className="btnCount" onClick={sumar}>
        {" "}
        +
      </button>
      <p>amount: {contador}</p>
      <button className="btnCount" onClick={restar}>
        {" "}
        -
      </button>
      <button className="btnCount">Add to Cart </button>
    </div>
  );
};

export default ItemCount;

/// falta agregar el estilo css al componente ItemCount.
