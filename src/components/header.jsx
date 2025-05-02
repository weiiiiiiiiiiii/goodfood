import { Link } from "react-router"
import ShoppingCart from "./ShoppingCart"

function Header({ title }) {
    return (

        <header className="bg-[#fbf6eb] h-[5rem] flex items-center">
            {/* logo 標題*/}
            <Link to="/">
                <img src="/logo.png" alt="logo"
                    className="h-[3.8rem] pl-[6rem] pr-[0.5rem] "
                />
            </Link>
            <h1 className="text-[2rem] font-bold">{title}</h1>
            <div className="text-right border w-230">
                <Link to=""><h1>商品列表</h1></Link>
                
            </div>

            {/*  */}
            <ShoppingCart />


        </header>

    )
}


export default Header