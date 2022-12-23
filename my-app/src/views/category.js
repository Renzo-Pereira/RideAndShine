import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";

const CategoryView = () =>{

    return  <Layout>
        <ItemListContainer />
        </Layout>
}

export default CategoryView;