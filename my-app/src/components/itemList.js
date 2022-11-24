import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
return (
    <ul>
        
    {products.map((product) => (
        <Link to={`/item/${product.id}`}><Item key={product.name}product={product} /></Link>
    ))}
    </ul>
);
};

export default ItemList;

