import { Link } from "react-router"


function Footer() {
    return (
        <div className="bg-yellow-100/90 grid justifly-center px-15 bottom-0">
            <div className=" md:px-10 grid grid-cols-1 md:grid-cols-2 py-10">
                <div className="grid grid-cols-2">
                    <div className="grid grid-rows-3 flex justify-center items-center">
                        <h2 className="font-bold text-lg md:text-xl mb-1">Contact</h2>
                        <div className="flex justify-center gap-3 md:gap-5">
                            <Link to="https://www.facebook.com/thehousebreakfast?locale=zh_TW" ><img className="filter brightness-0 w-8 h-8 md:w-10 md:h-10" src="/nn-icon-facebook.svg" alt="facebook" /></Link>
                            <Link to="/"><img className="filter brightness-0 w-8 h-8 md:w-10 md:h-10" src="/nn-icon-instagram.svg" alt="instagram" /></Link>
                        </div>
                        <p className="font-bold text-[15px] md:text-base mt-2">02 2755 4066</p>
                    </div>
                    <div className="grid grid-rows-3 text-[15px] text-center md:text-base md:text-left items-center">
                        <Link to="/AboutUs" className="lg:w-20 hover:underline underline-offset-2 hover:[text-shadow:0px_0px_30px_black]">關於我們</Link>
                        <Link to="/" className="lg:w-20 hover:underline underline-offset-2 hover:[text-shadow:0px_0px_30px_black]">會員登入</Link>
                        <Link to="/Map" className="lg:w-20 hover:underline underline-offset-2 hover:[text-shadow:0px_0px_30px_black]">地圖探索</Link>
                    </div>
                </div>
                <div className="grid grid-rows-3 items-center text-center mt-10 md:mt-0 md:text-left md:pl-15 ">
                    <h2 className="font-bold text-base md:text-lg">國北教學生可享優惠-薯餅塔+紅茶<span className="text-red-600">折抵5元</span></h2>
                    <h2 className="text-base md:text-lg">地址 : 106台北市大安區臥龍街5號</h2>
                    <h2 className="text-base md:text-lg">營業時間 : 07:30~14:00  (週日週一公休)</h2>
                </div>
            </div>


        </div>
    )
}


export default Footer
