import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const CategoryView = () =>{
    const { category } = useParams();
    // const categories = item.filter(product => product.category === category)

    return  <Layout>
        <ItemListContainer />
        </Layout>
}

export default CategoryView;