import { useGetItem } from "../hooks/useGetItem";
import  ItemList  from "./ItemLista";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};