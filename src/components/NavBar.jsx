import { NavLink, useLocation } from "react-router"
import { useState } from "react";
import HamMenu from "./HamMenu";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbarcontent = [
        { to: "/breakfast/category/元氣好食", label: "元氣好食", info: "可選擇 起士堡、馬芬堡、丹麥吐司、貝果" },
        { to: "/breakfast/category/好好食小點心", label: "好好食小點心" },
        { to: "/breakfast/category/法式丹麥", label: "法式丹麥" },
        { to: "/breakfast/category/手工蛋餅", label: "手工蛋餅" },
        { to: "/breakfast/category/好好喝", label: "好好喝" },
        { to: "/breakfast/category/好食Pasta", label: "好食Pasta" },
        { to: "/breakfast/category/好食組合", label: "好食組合" },
    ];

    const location = useLocation();
    const NavbarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around space-x-4 lg:space-x-6" >

            {navbarcontent.map(({ to, label }) => (
                <div key={to} className="flex flex-col items-center">
                    <NavLink
                        to={to}
                        className={
                            ({ isActive }) => `text-white/90 md:text-black mx-3 lg:mx-5 my-3 md:my-7 text-base lg:text-xl transition-all duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-60"} 
                    hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                        }
                    >
                        {label}
                    </NavLink>
                    {location.pathname === "/food/category/vitality" && to === "/food/category/vitality" && info && (
                        <p className="mt-2 text-sm text-gray-500">{info}</p>
                    )}
                </div>
            ))}

            { }

        </div>
    );

    return (
        <>
            <div className="relative z-10">
                <div className="hidden md:flex justify-around mt-3 pb-5 bg-white/50 backdrop-blur-md mb-5">
                    <NavbarContent />
                </div>
            </div>

            <div className="drawer md:hidden">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} />
                <HamMenu
                    id="drawer-toggle"
                    className="z-1000 absolute drawer-toggle left-0 mt-6 -translate-y-45"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-999 w-auto">
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
                    <div className="pt-20">
                        <h2 className="bg-green-100 bg-opacity-50 text-xl font-bold pt-1 pb-1 mb-3">CATEGORY</h2>
                        <NavbarContent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar