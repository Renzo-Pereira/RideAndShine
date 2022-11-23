import { useEffect, useState } from "react";
import itemList from "./itemList";
import {item} from "../mocks/item.mock"
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve) =>
    setTimeout (() => {
        resolve(item);
    }, 3000)
    ).then((data) => {
        if(category) {
            const categories = data.filter(product => product.category === category)
            setProducts(categories)
        } else {
            setProducts(data);
        }
    });
        }, [category])

    if (products.length === 0) {
        return  <p>Loading...</p>;
    }

    return (
        <div className="h-full">
            <itemList products={products} />
        </div>
        );
};

export default ItemListContainer;  