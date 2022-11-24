const Item = ({ product }) => {
    return (
    <div>
        <img src={product.img} className="w-20 h-20" alt="Product" />
        <li><h4>{product.name}</h4></li>
    </div>
    );
};

export default Item;

