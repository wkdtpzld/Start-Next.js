import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function LayOut({ children }) {
    
    const router = useRouter();

    const obj = {
        "/": "home",
        "/about": "about",
        "/movies/*" : "movies"
    }

    return (
        <>
            <NavBar />
            <Seo title={obj[router.pathname]}></Seo>
            <div>{children}</div>
        </>
    )
}