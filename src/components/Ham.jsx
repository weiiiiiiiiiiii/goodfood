import { useState, useRef, useEffect } from "react";
import HamMenu from "./HamMenu";
import { Link } from "react-router";


export default function Ham() {
    // 漢堡選單元素
    const [isOpen, setIsOpen] = useState(false);
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
        <>
            {/* 手機頁面的排版+漢堡 */}
            <div className="drawer md:hidden z-25">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
                <HamMenu
                    id="drawer-toggle"
                    className="absolute drawer-toggle -translate-y-15"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side w-[15rem] bg-white">
                    <div className="pt-20 z-11">
                        <h2 className="bg-green-100 bg-opacity-50 text-xl font-bold pt-1 pb-1 mb-5 w-[15rem]">CATEGORY</h2>


                        <div className="flex flex-col text-center px-10 gap-5">
                            <Link to="/" className="cursor-pointer hover:[text-shadow:0px_0px_30px_green]">首頁</Link>
                            <div className="relative inline-block " ref={dropdownRef}>


                                <Link to="/Product" className="cursor-pointer text-center hover:[text-shadow:0px_0px_30px_green] pl-5 py-4">商品列表</Link>


                                {/* 倒三角按鈕：控制選單 */}
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="ml-2 text-black focus:outline-none hover:scale-130 cursor-pointer"
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

                            <Link to="/Map" className="cursor-pointer hover:[text-shadow:0px_0px_30px_green]">地圖探索</Link>
                            <Link to="/" className="cursor-pointer hover:[text-shadow:0px_0px_30px_green]">會員登入</Link>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

