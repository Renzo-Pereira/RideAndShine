import empty from "../assets/LogoNegroTrasparente.png";
import OceanVibesIndex from "../assets/OceanVibesIndex.webp"
import RideYourDreamIndex from "../assets/RideYourDreamIndex.jpeg"
import RideYourDreamIndex2 from "../assets/RideYourDreamIndex2.jpeg"
import { Link } from "react-router-dom";


function Contenido() {
    return (
        <div>
            <div className="promo">
                <div className="promoTexto">
                    <p className="promoP1">DISFRUTA DE TU DESCUENTO</p>
                    <h2>20 %  DE <br />DESCUENTO </h2>
                    <p>A partir de la segunda prenda , se te aplicara un 20% <br />de descuento a la compra , no dudes en enviarnos tu mensaje para <br />ponernos ¡YA! en contacto contigo</p>
                </div>
                <div>
                    <img className="promoImg" src={OceanVibesIndex} />
                </div>
            </div>
            <div className="ultimoLanzamiento">
                <div>
                    <img className="ultimoLanzamientoImgA" src={RideYourDreamIndex} />
                </div>
                <div className="ultimoLanzamientoContenedorB">
                <Link className="nav" to="/item/EroTshSkod8hnRatbFiR"><img className="ultimoLanzamientoImgB" src={RideYourDreamIndex2} /></Link>
                </div>
                <h2 className="ultimoLanzamientoH2ios">Ultimo Lanzamiento</h2>
                <div className="ultimoLanzamientoTexto">
                    <h2 className="ultimoLanzamientoH2">MIRA NUESTRO ULTIMO <br/>LANZAMIENTO</h2>
                    <h2>Ride Your Dream</h2>
                    <p>Esta remera esta pensada para aquellos soñadores,  <br />que quieren lucir lo mejor de ellos.</p>
                    <p></p>
                </div>
            </div>
            <div className="footer">
                <div id="nosotros" className="contenedorMarca">
                    <div className="subLogo">
                        <h2 className="Marca">Ride And Shine</h2>
                        <img src={empty} alt="Empty Cart"></img>
                    </div>
                    <p className="textoFooter">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet magnam saepe vero temporibus atque
                        consequatur
                        natus soluta sit assumenda corporis? Sapiente, officia? Esse quas asperiores, sapiente unde quasi aliquam
                        eaque
                        et voluptates nobis repellat natus sequi odit! Ducimus totam voluptate eos impedit, accusamus dolorum eum ut
                        aliquam animi vel, vero saepe minus amet? Accusantium ullam consectetur provident rerum at! Veniam ullam
                        repudiandae reiciendis eius minus maiores velit expedita libero fuga molestiae accusamus non, est magnam
                        autem
                        quod earum nemo sit omnis adipisci quae reprehenderit nobis tempore fugit dolorum. Magnam repudiandae rem
                        optio
                        beatae est at vero distinctio porro totam tempore.
                    </p>
                </div>
                <div className="contenedorContacto">
                    <h2 className="Contacto">Contacto</h2>
                    <p>No dudes en ponerte en contacto con nosotros <br/>mediante nuestras redes sociales para enviarnos<br/> un mensaje privado y poder coordinar tu pedido.</p>

                    <div className="itemContacto wpp">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" className="iconoWpp">
                            <path
                                d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z">
                            </path>
                        </svg>
                        <p className="textoContacto">+598 98 636 634</p>
                    </div>

                    <div className="itemContacto">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" className="iconoGmail">
                            <path
                                d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,16c-2.209,0-4-1.791-4-4 c0-2.209,1.791-4,4-4c1.042,0,1.982,0.408,2.694,1.061l-1.093,1.034C11.167,9.729,10.613,9.5,10,9.5c-1.381,0-2.5,1.119-2.5,2.5 c0,1.381,1.119,2.5,2.5,2.5c1.209,0,2.218-0.859,2.45-2H10V11h3.859C13.942,11.321,14,11.653,14,12C14,14.209,12.209,16,10,16z M18,12v1.5h-1V12h-1.5v-1H17V9.5h1V11h1.5v1H18z M20,12c0,4.418-3.582,8-8,8s-8-3.582-8-8s3.582-8,8-8S20,7.582,20,12z">
                            </path>
                        </svg>
                        <p className="textoContacto gmail">juan@juan.com</p>
                    </div>

                    <div className="itemContacto">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" className="iconoInstagram">
                            <path
                                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
                            </path>
                        </svg>
                        <a className="textoContacto" href="https://www.instagram.com/rideandshine.uy/">@rideandshine.uy</a>
                    </div>
                </div>
                <div className="contenedorEnvios">
                    <h2 className="Envios">Envios</h2>
                    <p className="textoFooter">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet magnam saepe vero temporibus atque
                        consequatur
                        natus soluta sit assumenda corporis? Sapiente, officia? Esse quas asperiores, sapiente unde quasi aliquam
                        eaque
                        et voluptates nobis repellat natus sequi odit! Ducimus totam voluptate eos impedit, accusamus dolorum eum ut
                        aliquam animi vel</p>
                </div>

                <div className="contenedorPago">
                    <h2>Metodos de Pago</h2>
                    <p className="textoFooter">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet magnam saepe vero temporibus atque
                        consequatur
                        natus soluta sit assumenda corporis? Sapiente, officia? Esse quas asperiores, sapiente unde quasi aliquam
                        eaque
                        et voluptates nobis repellat natus sequi odit! Ducimus totam voluptate eos impedit, accusamus dolorum eum ut
                        aliquam animi vel</p>
                </div>
            </div>
        </div>
    )
}

export default Contenido;