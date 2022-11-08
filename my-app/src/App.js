import Header from "./components/header"
import Contenido  from './components/contenido';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar  from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Header />  
      <NavBar />  
      <ItemListContainer greeting={"Este texto se muestra gracias a greeting"} />
      <Contenido /> 
    </div>
  );
}

export default App;
