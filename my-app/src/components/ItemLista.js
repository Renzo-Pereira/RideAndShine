import { Item } from "./Item";

const ItemList = ({ products }) => {
return (
  <div className="contenidoA">
    <ul className="Inicio">
    <div>
        <ul className="categorias">
          <li>
          <a className="categoriasItem" href="/category/ColorAzul">Remeras Azules</a>
          </li>
          <li>
          <a className="categoriasItem" href="/category/ColorBlanco">Remeras Blancas</a>
          </li>
          <li>
          <a className="categoriasItem" href="/category/ColorBeige">Remeras Beige</a>
          </li>
          <li>
          <a className="categoriasItem" href="/category/ColorNegro">Remeras Negras</a>
          </li>
          <li>
          <a className="categoriasItem" href="/category/ColorRosa">Remeras Rosas</a>
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





