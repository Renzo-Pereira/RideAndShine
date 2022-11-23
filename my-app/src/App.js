import Header from "./components/header"
import Contenido  from './components/contenido';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar  from './components/NavBar';
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout> 
      <Header />  
      <NavBar />  
      <ItemListContainer />
      <Contenido /> 
      </Layout> 
  );
}

export default App;
