import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Items } from "../mocks/item.mock";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);
const { id } = useParams();

useEffect(() => {
  new Promise((resolve) =>
    // Simulation of a call to an api
    setTimeout(() => resolve(Items.find((item) => item.id === id)), 1000)
  ).then((data) => setItem(data));
}, [id]);

if (!item) {
  return <Loading />;
}

return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

