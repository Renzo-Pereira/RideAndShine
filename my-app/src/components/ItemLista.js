import { Item } from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
return (
  <div className="contenidoA">
    <ul className="Inicio">
    <div>
        <ul className="categorias">
          <li>
          <Link className="MenuDespegable" to="/category/ColorAzul">Remeras Azules</Link>
          </li>
          <li>
          <Link className="MenuDespegable" to="/category/ColorBeige">Remeras Beige</Link>
          </li>
          <li>
          <Link className="MenuDespegable" to="/category/ColorBlanco">Remeras Blancas</Link>
          </li>
          <li>
          <Link className="MenuDespegable" to="/category/ColorNegro">Remeras Negras</Link>
          </li>
          <li>
          <Link className="MenuDespegable" to="/category/ColorRosa">Remeras Rosa</Link>
          </li>
        </ul>
      </div>
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

