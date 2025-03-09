import {Routes as Router,Route} from "react-router-dom"
import { Home } from "../pages/home"
import { Products } from "../pages/products"
import { ProductId } from "../pages/productId"
import { Login } from "../pages/login"
import { Register } from "../pages/register"


export const Routes=()=>{
    return <Router>
       <Route path="" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/products/:id" element={<ProductId/>} />
       <Route path="/sigin" element={<Login />} />
       <Route path="/register" element={<Register />} />
    </Router>
}