import { NavLink, useLocation } from "react-router"

function NavBar() {
    const navbarcontent = [
        { to: "/food/category/vitality", label: "元氣好食", info: "可選擇 起士堡、馬芬堡、丹麥吐司、貝果" },
        { to: "/food/category/dessert", label: "好好食小點心" },
        { to: "/food/category/danish", label: "法式丹麥" },
        { to: "/food/category/Omelette", label: "手工蛋餅" },
        { to: "/food/category/drink", label: "好好喝" },
        { to: "/food/category/pasta", label: "好食Pasta" },
        { to: "/food/category/combo", label: "好食組合" },
    ];

    const location = useLocation();
    const NavbarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6" >

            {navbarcontent.map(({ to, label }) => (
                <div key={to} className="flex flex-col items-center">
                    <NavLink
                        to={to}
                        className={
                            ({ isActive }) => `mx-5 my-7 text-xl transition-all duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-60"} 
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
        <div className="relative z-10">
            <div className="hidden md:flex justify-around mt-3 pb-5 bg-white/50 backdrop-blur-md mb-5">
                <NavbarContent />
            </div>

        </div>
    )
}

export default NavBar