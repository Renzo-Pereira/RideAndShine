import Contenido  from './components/contenido';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout> 
      <ItemListContainer />
      <Contenido /> 
      </Layout> 
  );
}

export default App;
