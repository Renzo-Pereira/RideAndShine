import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Category from "../views/category";
import Item from "../views/item";
import Cart from "../views/cart";
import Contacto from "../views/contacto";
import Tiendas from "../views/tiendas";
import Remeras from "../views/remeras";
import Canguros from "../views/canguros";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App  />,
    },
    {
        path: "/category/:category",
        element: <Category  />,
    },
    {
        path: "/item/:id",
        element: <Item  />,
    },
    {
        path: "/contacto/:",
        element: <Contacto />,
    },
    {
        path: "/tiendas/:",
        element: <Tiendas />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/remeras/:",
        element: <Remeras />,
    },
    {
        path: "/canguros/:",
        element: <Canguros />,
    },
    {
        path: "/item/:EroTshSkod8hnRatbFiR",
        element: <Item  />,
    },
]);