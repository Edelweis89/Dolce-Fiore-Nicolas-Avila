//Agrupador de un set de Componentes. ItemList Mapea cada producto por separado y se lo pasa al componente Item.

import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
