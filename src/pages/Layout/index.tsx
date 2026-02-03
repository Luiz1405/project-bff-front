import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"


export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer>
                2026 @ Densenvolvido por Luiz Kubaszewski | Projeto para fins de estudo.
            </Footer>
        </>
    )
}