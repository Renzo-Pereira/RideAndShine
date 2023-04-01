import { Layout } from "../components/Layout";
import boxgarden from "../assets/BoxGarden.webp"

const Tiendas = () => {

    return <Layout>
        <div className="contenidoTiendas">
            <div>
            <h2 className="tituloTiendas">Hope Company</h2>
            <br />
            <p className="textoTiendas">Ubicados en el Segundo piso de «Box Garden» <br />(Bvar. Artigas &, 20100 Punta del Este, Departamento de Maldonado)</p>
            <p className="textoTiendas">Dentro del Local podrán ver y probar algunos de nuestros artículos <br /> que se encuentran allí.</p>
            </div>
        <img src={boxgarden} className="imgTiendas"/>
        </div>
    </Layout>
}

export default Tiendas;