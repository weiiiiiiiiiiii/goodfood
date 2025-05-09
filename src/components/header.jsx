import { Link } from "react-router"
import ShoppingCart from "./ShoppingCart"
import HamMenu from "./HamMenu"
import { useState } from "react";

function Header({ title }) {

    // 給漢堡選單使用(漢堡選單會包含商品列表和登入，所以寫在header裡)
    const [isOpen, setIsOpen] = useState(false);

    const navbarcontent = [
        { to: "/breakfast/category/元氣好食", label: "元氣好食" },
        { to: "/breakfast/category/好好食小點心", label: "好好食小點心" },
        { to: "/breakfast/category/法式丹麥", label: "法式丹麥" },
        { to: "/breakfast/category/手工蛋餅", label: "手工蛋餅" },
        { to: "/breakfast/category/好好喝", label: "好好喝" },
        { to: "/breakfast/category/好食Pasta", label: "好食Pasta" },
        { to: "/breakfast/category/好食組合", label: "好食組合" },
    ];


    return (

        <header className=" bg-[#fbf6eb] h-[5rem] flex items-center">
            {/* logo 標題*/}
            <Link to="/">
                <img src="/logo.png" alt="logo"
                    className="h-[3.8rem] pl-[6rem] pr-[0.5rem] "
                />
            </Link>
            <h1 className="text-[2rem] font-bold">{title}</h1>


            {/* 電腦頁面的排版 */}
            <div className="hidden md:flex absolute right-[12rem]  gap-[2rem]">
                <div>
                    <Link to="/Product"><h1>商品列表</h1></Link>
                </div>

                <Link to=""><h1>登入列表</h1></Link>
            </div>



            {/* 手機頁面的排版+漢堡 (未完成)*/}
            <div className="flex md:hidden absolute right-[12rem]  gap-[2rem]">

                <div className="drawer md:hidden">
                    <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
                    <HamMenu
                        id="drawer-toggle"
                        className="z-1000 absolute drawer-toggle left-0 mt-15 -translate-y-45"
                        onClick={() => setIsOpen(!isOpen)}
                        isOpen={isOpen}
                    />
                    <div className="drawer-side z-999 w-auto">

                        <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
                        <div className="pt-20">
                            <h2 className="bg-green-100 bg-opacity-50 text-xl font-bold pt-1 pb-1 mb-3">CATEGORY</h2>
                            <div>
                                <button>
                                    <Link to="/Product"><h1>商品列表</h1></Link>
                                </button>
                                <ul>
                                    {navbarcontent.map((food, index) =>
                                        <li key={index}>
                                            <Link to="">
                                                {food.name}
                                            </Link>

                                        </li>
                                    )}
                                </ul>
                                <Link to=""><h1>登入列表</h1></Link>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            {/*  */}
            <ShoppingCart />


        </header>

    )
}


export default Header