const ItemDetail = ({ producto }) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <p>Detail: {producto.descripcion}</p>
      <p>Category: {producto.categoria}</p>
      <p>{producto.precio}</p>
    </div>
  );
};

export default ItemDetail;
