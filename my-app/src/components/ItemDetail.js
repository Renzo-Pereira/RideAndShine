const ItemDetail = ({ item }) => {
    return (
    <div className="Detalles">
        <div><h1>{item.name}</h1></div>
        <img src={item.img} alt="Remera" />
        <p>{item.description}</p>
        <h3>{"$"+item.price}</h3>
    </div>
    );
};

export default ItemDetail; 


