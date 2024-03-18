import { Container } from "react-grid-system"
import { Footer } from "../Components/Footer/footer"
import { Navbar } from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

export const LayoutBase = () => {
    return(
        <>  
            <Navbar/>
                <Outlet/>
            <Container>
                <Footer/>
            </Container>
        </>
    )
}