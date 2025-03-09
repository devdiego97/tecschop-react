import { ReactNode } from "react"
import { Header } from "../components/header"

type Props={
    children:ReactNode
}
export const Layout=({children}:Props)=>{

    return <div>
        <Header />
        <main>
        {children}
        </main>
    </div>
}