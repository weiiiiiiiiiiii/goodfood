import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { Link } from "react-router";

function BasketModal({ isOpen, toggleModal }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleCancel = () => toggleModal(isOpen);
    const getTotalPrice = () => {
        return (cartItems.length > 0) ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0) : 0;
    };

    return (
        <>
            {isOpen && (
                <div className="modal modal-open ">
                    <div className="modal-box max-w-md bg-gray-100">
                        <h3 className="font-black text-3xl md-10">Shopping Bag</h3>
                        {cartItems.length === 0 ? (
                            <div className="text-cneter text-xl mt-10">Cart is empty</div>
                        ) : (
                            cartItems.map(item => (
                                <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-gray-300">
                                    <Link to={`breakfast/id/${item.id}`} onClick={handleCancel}>
                                        <img className="max-w-15 flex-1 cur-poiner" src={item.pic} alt={item.name} />
                                    </Link>
                                    <div className="ml-5 flex-8 w-48 text-left">
                                        <div className="font-bold text-lg">{item.name}</div>
                                        <div className="flex items-center space-x-3">
                                            <span>數量 : </span>
                                            <select
                                                defaultValue={item.qty}
                                                onChange={(e) =>
                                                    dispatch(addCartItems({
                                                        id: item.id,
                                                        name: item.name,
                                                        pic: item.pic,
                                                        price: item.price,
                                                        qty: Number(e.target.value),
                                                    }))
                                                }
                                                className="select select-bordered select-xs w-[3.5rem] px-3"
                                            >

                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold">${item.price * item.qty}</div>
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
                            <div className="font-semibold text-lg">總價:</div>
                            <div className="font-bold text-right text-lg">${getTotalPrice()}</div>
                        </div>

                        {/*check*/}


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