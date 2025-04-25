import { Link } from "react-router"
import ShoppingCart from "./ShoppingCart"

function Header({ title }) {
    return (
        
        <header className="bg-[#fbf6eb] h-[5rem] flex items-center">
            {/* logo 標題*/}
            <img src="/logo.png" alt="logo"
                className="h-[3.8rem] pl-[6rem] pr-[0.5rem] "
            />
            <h1 className="text-[2rem] font-bold">{title}</h1>

            {/*  */}
            <ShoppingCart />


        </header>

    )
}


export default Header