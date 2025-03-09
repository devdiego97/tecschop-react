import { Link } from "react-router-dom"
import { Container } from "./style"


export const Header=()=>{
    return <Container>
        <div className="logo">
           <img src="/logo.png" alt="esse é o logo do site" />
        </div>
        <div className="open-mobile">

        </div>
        <nav>
            <div className="close-mobile">

            </div>
            <div className="links">
                <ul>
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/products"}>Produtos</Link>
                    <Link to={"/sigin"}>Entrar</Link>
                    <Link to={"/register"}>criar conta</Link>
                </ul>
            </div>
        </nav>
    </Container>
}