import { Item } from "./Item";

const ItemList = ({ products }) => {
return (
  <div className="contenidoA">
    <ul className="Inicio">
      <div className="articulos">
    {products.map((product) => (
      <Item product={product} key={product.id}/>
    ))}
    </div>
  </ul>
  </div>
);
};

export default ItemList;





