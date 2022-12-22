const Item = ({ product }) => {
    return (
    <div className="Item">
        <img src={product.img} className="w-20 h-20" alt="Product" />
        <li><h4>{product.name}</h4></li>
        <li><p className="descripcion">{product.description}</p></li>
    </div>
    );
};

export default Item;

