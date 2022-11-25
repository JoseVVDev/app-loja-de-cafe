import { Routes, Route } from "react-router-dom"
import { Checkout } from "./components/Checkout"
import { Home } from "./components/Home"
import { Success } from "./components/Success"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/success" element={<Success/>}/>
        </Routes>
    )
}