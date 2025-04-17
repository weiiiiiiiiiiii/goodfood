import Heart from './Heart'
import AddToCart from './AddToCart'
import { useState } from "react"


function FoodDetail({ food }) {
    const [qty, setQty] = useState(1);

    return (
        <>
            {/* 電腦螢幕*/}
            <div className="hidden md:flex">
                <div className="w-3/5 mx-auto flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 mb-[10rem] py-5 rounded-3xl">
                    <img
                        src={food.pic}
                        alt=""
                        className="w-1/4 mt-15" />


                    <div className="w-full px-4 mb-0">
                        <div className="flex justify-start items-center gap-[2rem] mx-[3rem]">
                            <Heart />
                            <button className="border border-black border-[2px] rounded-2xl px-[1rem] py-[0.1rem] text-[1.5rem] text-black transition-all duration-400 hover:bg-red-300 hover:border-none hover:text-white cursor-pointer group-hover:scale-105"> Comments </button>
                        </div>
                    </div>

                    <div className="flex w-full ">
                        <div className="w-full px-4 flex justify-start -mt-3 text-left pl-0 pl-[4rem]">
                            <h3 className="w-[10rem] text-[2rem] font-semibold">{food.name}</h3>
                        </div>
                        <div className="w-full px-4 ">
                            <p className="pr-[4rem] text-right text-[#631616] font-md text-[1.2rem]"> ${food.price}NTD</p>
                        </div>
                    </div>


                    <div className="w-full px-4 flex justify-start items-center -mt-3">
                        <p className="w-[20rem] mx-[3rem] text-[1.3rem]">{food.information}</p>
                        <button className="border h-[2.8rem] rounded-sm px-[0.7rem] text-[1rem] -ml-[1.5rem] bg-[#D9D9D9] text-[#424242] border-[#424242] transition-all duration-400 hover:bg-gray-300 hover:border-none hover:text-white cursor-pointer">詳細資訊</button>
                    </div>


                    <div className="w-full px-[4rem] -mt-3 ">

                        <textarea
                            placeholder="備註:"
                            className="w-full  p-3 rounded-lg bg-[#D9D9D9] text-[1rem] resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                            rows="4"
                        >
                        </textarea>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className=" w-full text-left pl-[4rem] -mt-[2rem]">
                            <span className="font-bold"> 數量: </span>
                            <select
                                className="select select-bordered w-20 bg-gray-300"
                                value={qty}
                                onChange={event => setQty(Number(event.target.value))}
                            >
                                {[...Array(10).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div className="mb-[3rem] flex flex-col items-center justify-between pr-8 gap-2 pr-[0.5rem] text-[#631616]">
                            <p className="w-full text-right px-[3.8rem] text-[1.2rem]">
                                <span className="font-bold">總價</span>:  {food.price * qty}
                            </p>
                            <AddToCart food={food} qty={qty}/>
                        </div>

                    </div>
                </div>
            </div>

            {/* 手機螢幕*/}
            <div className="md:hidden">
                <div className="w-3/5 mx-auto pr-[1rem] flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 mb-[10rem] py-5 rounded-3xl">
                    <img
                        src={food.pic}
                        alt=""
                        className="w-1/3 mt-15" />


                    <div className="w-full px-4 mb-0">
                        <div className="flex justify-start items-center gap-[1.5rem] mx-[2.5rem]">
                            <Heart />
                            <button className="border border-black border-[2px] rounded-2xl px-[1rem] py-[0.1rem] text-[0.9rem] text-black transition-all duration-400 hover:bg-red-300 hover:border-none hover:text-white cursor-pointer group-hover:scale-105"> Comments </button>
                        </div>
                    </div>


                    <div className="flex w-full">
                        <div className=" w-[12rem] px-2 flex justify-start -mt-3 text-left pl-0 pl-[4rem] mr-0 -ml-[0.5rem]">
                            <h3 className="w-[10rem] text-[1.4rem] font-semibold ">{food.name}</h3>
                        </div>
                        <div className="w-[5.5rem] px-3 -ml-[1rem]">
                            <p className="text-left text-[#631616] font-md text-[1rem]"> ${food.price}NTD</p>
                        </div>
                    </div>



                    <div className="w-full px-4 flex justify-start items-center -mt-3">
                        <p className="mx-[2rem] text-[1.1rem] w-[8rem]">{food.information}</p>
                        <button className="h-[3rem] border w-[4rem] rounded-sm px-[0.7rem] text-[0.8rem] mr-[0.9rem] bg-[#D9D9D9] text-[#424242] border-[#424242] transition-all duration-400 hover:bg-gray-300 hover:border-none hover:text-white cursor-pointer">詳細資訊</button>
                    </div>


                    <div className="w-[115%] px-[4rem] -mt-3 ">

                        <textarea
                            placeholder="備註:"
                            className="w-full ml-[1rem] p-3 rounded-lg bg-[#D9D9D9] text-[1rem] resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                            rows="4"
                        >
                        </textarea>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className=" w-full text-left pl-[4rem] -mt-[2rem]">
                            <span className="font-bold "> 數量: </span>
                            <select
                                className="select select-bordered w-15 bg-gray-300"
                                value={qty}
                                onChange={event => setQty(Number(event.target.value))}
                            >
                                {[...Array(10).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div className="mb-[3rem] flex flex-col pr-8 gap-2 pr-[0.5rem] text-[#631616] mt-[0.7rem]">
                            <p className="w-[8rem] text-right pr-0 text-[1rem]">
                                <span className="font-bold">總價</span>:  {food.price * qty}
                            </p>
                            <AddToCart food={food} qty={qty}/>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )




}




export default FoodDetail;