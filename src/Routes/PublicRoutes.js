import { Routes, Route } from "react-router-dom";
import { Counter } from "../Pages/Counter";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";
import { Register } from "../Pages/Register";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Counter/>}/>
            <Route path="/register/:id/:name" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
}