import { ShoppingBasket } from "lucide-react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";


function AddToCart({ food, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addtoCart = () => {
        setShowToast(true);

        dispatch(addCartItems({
            id: `${food.id}-${food.name}`,
            name: food.name,
            pic: food.pic,
            price: food.price,
            qty,
        }))

        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }

    return (
        <>
            {/* 電腦螢幕*/}
            <button
                className="hidden md:flex btn bg-red-300 px-5 py-5 w-[10rem] mx-[3.6rem] text-gray-700"
                onClick={addtoCart}
            >
                <ShoppingBasket
                    strokeWidth={1.5} className=" w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
                />
                <span className="font-normal ml-3">加入購物車</span>

            </button>

            {/* 手機螢幕*/}

            <button
                className=" md:hidden btn bg-red-300 pr-[0.3rem] w-[7.5rem] py-0.5 h-[1.8rem] mx-[0.5rem] text-gray-700"
                onClick={addtoCart}
            >
                <ShoppingBasket
                    strokeWidth={1.5} className="w-4.2 h-4 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
                />
                <span className="font-normal mr-[0.5rem] text-[0.7rem]">加入購物車</span>

            </button>

            {showToast && (
                <div className="toast toast-end">
                    <div className="alert">
                        <span>
                            {qty}{qty > 1 ? "個" : "個"} {food.name} {qty > 1 ? "已經" : "已經"}加入到你的購物車
                        </span>
                    </div>
                </div>
            )}
        </>
    )

}

export default AddToCart;