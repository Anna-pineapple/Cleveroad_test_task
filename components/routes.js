import { GOODS_ROUTE, LOGIN_ROUTE } from "../utils/consts"
import Login from "./Login";
import Goods from "./Goods";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: GOODS_ROUTE,
        Component: Goods
    }
]