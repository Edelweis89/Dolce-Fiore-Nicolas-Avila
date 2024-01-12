import { BsCartXFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CarWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);
  return (
    <Link className="carrito" to="/Carrito" id="cartwidget">
      <BsCartXFill />
      {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
  );
};

export default CarWidget;
