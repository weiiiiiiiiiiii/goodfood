import { Link } from "react-router"
import NavBar from "./NavBar"

function Header({ title }) {
    return (
        <header className="text-3xl flex flex-col items-center leading-28">

            <Link to='/'>
                <h2 className="font-bold">{title}</h2>
            </Link>

            <hr className="w-25 border-3 rounded-lg mb-6" />
            <div className="w-full">
                <NavBar />
            </div>


        </header>
    )
}


export default Header