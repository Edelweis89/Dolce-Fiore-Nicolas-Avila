// El componente Item se encarga de la vista de cada card del producto por separado.

import { Link } from "react-router-dom";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="imageCards" src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <p className="textCards">{producto.nombre}</p>
        <p className="textCards">{producto.precio}</p>
        <p className="textCards">Stock: {producto.stock}</p>

        <ItemCount stock={10} />
        <Link to={`/detalle/${producto.id}`} className="link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
