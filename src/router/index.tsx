import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { Layout } from "../pages/Layout"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}