import { NavLink} from "react-router"

function NavBar() {

    const navbarcontent = [
        { to: "/breakfast/category/元氣好食", label: "元氣好食" },
        { to: "/breakfast/category/好好食小點心", label: "好好食小點心" },
        { to: "/breakfast/category/法式丹麥", label: "法式丹麥" },
        { to: "/breakfast/category/手工蛋餅", label: "手工蛋餅" },
        { to: "/breakfast/category/好好喝", label: "好好喝" },
        { to: "/breakfast/category/好食Pasta", label: "好食Pasta" },
        { to: "/breakfast/category/好食組合", label: "好食組合" },
    ];

    const NavbarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around space-x-4 lg:space-x-6" >

            {navbarcontent.map(({ to, label }) => (
                <div key={to} className="flex flex-col items-center">
                    <NavLink
                        to={to}
                        className={
                            ({ isActive }) => `text-white/90 md:text-black mx-3 lg:mx-5 my-3 md:my-7 text-base lg:text-xl transition-all duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-60"} 
                    hover:opacity-100 hover:[text-shadow:0px_0px_30px_red]`
                        }
                    >
                        {label}
                    </NavLink>
                </div>
            ))}

        </div>
    );

    return (
        <>
            <div className="z-10">
                <div className="hidden md:flex justify-around pt-5 pb-5 bg-white/50 backdrop-blur-md relative">
                    <NavbarContent />
                </div>
            </div>

        </>
    )
}

export default NavBar