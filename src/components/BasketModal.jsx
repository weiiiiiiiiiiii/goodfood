import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { Link } from "react-router";
import { ShoppingBasket } from "lucide-react"


function BasketModal({ isOpen, toggleModal }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);


    const handleCancel = () => toggleModal(!isOpen);
    const getTotalPrice = () => {
        return (cartItems.length > 0) ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0) : 0;
    };


    return (
        <>
            {isOpen && (
                <div className="modal modal-open ">
                    <div className="modal-box max-w-md bg-gray-100 bg-gray-100">
                        <h3 className="font-black text-3xl md-10">Shopping Bag</h3>
                        {cartItems.length === 0 ? (
                            <div className="text-cneter font-thin text-lg mt-10">Cart is empty</div>
                        ) : (
                            cartItems.map(item => (
                                <li key={item.id} className="border-b  flex justify-between items-center py-4 mb-4 border-gray-300">
                                    <Link to={`breakfast/id/${item.id}`} onClick={handleCancel}>
                                        <img className="max-w-16 flex-1 cursor-pointer" src={item.pic} alt={item.name} />
                                    </Link>
                                    <div className="ml-5 flex-8 w-48 text-left">
                                        <div className="font-bold text-lg">{item.name}</div>
                                        <div className="flex items-center space-x-3 text-black ">
                                            <span className="text-base">數量 : </span>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(addCartItems({
                                                        id: item.id,
                                                        name: item.name,
                                                        pic: item.pic,
                                                        price: item.price,
                                                        qty: Number(e.target.value),
                                                    }))
                                                }
                                                className="bg-gray-100 text-black select select-bordered select-xs w-[3rem] px-3"
                                            >
                                                {[...Array(10).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-right text-lg flex">
                                        <div className="font-bold pr-5">${item.price * item.qty}</div>
                                        <div
                                            className="text-xl opacity-70 cursor-poiner"
                                            onClick={() => dispatch(removeCartItems(item.id))}
                                        >
                                            x
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}


                        {/*total*/}
                        <div className="flex justify-between items-center mt-5">
                            <div className="font-semibold text-lg">總價 :</div>
                            <div className="font-bold text-right text-lg">${getTotalPrice()}</div>
                        </div>


                        {/*check*/}
                        <button
                            className="btn bg-[#B4E8B4] w-full text-base font-light py-5 mt-8 flex justify-center items-center"
                        >
                            <ShoppingBasket
                                strokeWidth={1.5} className=" w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
                            />
                            <span className="border-0 rounded-lg font-thin ml-3 text-black">START CHECKOUT</span>
                        </button>


                        {/*close*/}
                        <div className="absolute right-4 top-4 modal-action mt-4">
                            <button onClick={handleCancel} className="bg-gray-200 btn btn-sm font-thin hover:bg-gray-400">X</button>
                        </div>


                    </div>
                </div>
            )}
        </>
    )


}


export default BasketModal

