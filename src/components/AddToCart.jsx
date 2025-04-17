import { ShoppingBasket } from "lucide-react"

function AddToCart() {
    return (
        <>
            {/* 電腦螢幕*/}
            <button className="hidden md:flex btn bg-red-300 px-5 py-5 w-[10rem] mx-[3.6rem] text-gray-700">
                <ShoppingBasket
                    strokeWidth={1.5} className=" w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
                />
                <span className="font-normal ml-3">加入購物車</span>

            </button>

            {/* 手機螢幕*/}

            <button className=" md:hidden btn bg-red-300 pr-[0.3rem] w-[7.5rem] py-0.5 h-[1.8rem] mx-[0.5rem] text-gray-700">
                <ShoppingBasket
                    strokeWidth={1.5} className="w-4.2 h-4 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
                />
                <span className="font-normal mr-[0.5rem] text-[0.7rem]">加入購物車</span>

            </button>
        </>
    )

}

export default AddToCart;