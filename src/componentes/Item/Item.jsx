// El componente Item se encarga de la vista de cada card del producto por separado.

import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="imageCards" src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <p className="textCards"> Item Collectible : {producto.nombre}</p>
        <p className="textCards">Price: $ {producto.precio}</p>
        <p className="textCards">Stock: {producto.stock}</p>

        <Link to={`/detalle/${producto.id}`} className="link">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Item;
