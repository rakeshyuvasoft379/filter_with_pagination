import { Footer } from "./Footer"
import Header from "./Header"
import { Sidebar } from "./Sidebar"

export const LayoutIndex = (props) => {
    return (
        <>
            <Header />
            <Sidebar />
            {props.children}
            <Footer />
        </>
    )
}