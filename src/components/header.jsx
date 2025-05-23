import { Link } from "react-router"
import ShoppingCart from "./ShoppingCart"
import { useState, useRef, useEffect } from "react";

function Header({ title }) {

    const dropdownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
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

        <header className=" bg-[#fbf6eb] h-[5rem] flex items-center z-0">

            {/* logo 標題*/}
            <Link to="/">
                <img src="/logo.png" alt="logo"
                    className="h-[3.8rem] pl-[4rem] md:pl-[6rem] pr-[0.5rem] "
                />
            </Link>
            <h1 className="text-[2rem] font-bold">{title}</h1>


            {/* 電腦頁面的排版 */}
            <div className="hidden md:flex absolute right-[12rem] gap-[1rem] z-25">
                <Link to="/" className="hover:bg-orange-100 py-3 px-3"><h1>首頁</h1></Link>
                <div className="relative inline-block hover:bg-orange-100 py-3 px-3" ref={dropdownRef}>


                    <Link to="/Product" className="cursor-pointer text-center">商品列表</Link>


                    {/* 倒三角按鈕：控制選單 */}
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="ml-2 text-black focus:outline-none hover:scale-130"
                    >
                        ▼
                    </button>


                    {/* 下拉選單 */}
                    {showDropdown && (
                        <ul className="absolute z-10 bg-white text-black mt-2 shadow-lg rounded w-48">
                            {navbarcontent.map((item, index) => (
                                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <Link to="" className="hover:bg-orange-100 py-3 px-3"><h1>登入列表</h1></Link>
            </div>





            {/*  */}
            <ShoppingCart />


        </header>

    )
}


export default Header