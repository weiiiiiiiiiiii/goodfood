import { useState } from "react"
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import ShoppingIcon from "../icon/ShoppingIcon";
import BasketModal from "./BasketModal";


export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);


    const cartItems = useSelector(selectCartItems) || [];
    const count = cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);


    return (


        <>
            <div
                onClick={toggleModal}
                className="inline-block absolute cursor-pointer right-[2rem] md:right-[6rem]"
            >
                <div className="indicator flex flex-col items-center text-center px-3">
                    {count > 0 && <span className="indicator-item badge bg-[#F9E1E1] text-black">
                        {count}
                    </span>}
                    <ShoppingIcon />
                </div>
            </div>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleModal}
            />
        </>
    )
}
