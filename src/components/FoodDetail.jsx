import Heart from './Heart'
import AddToCart from './AddToCart'

function FoodDetail({ food }) {
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


                    <div className="w-full px-4 flex justify-start -mt-3">
                        <h3 className="text-[2rem]  mx-[3rem] font-semibold">{food.name}</h3>
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
                    <div className="flex w-full">
                        <div className="w-full px-4 mb-[2rem]">
                            <p className="ml-[3rem] text-left text-[#631616] font-md text-[1.2rem]"> ${food.price}NTD</p>
                        </div>
                        <AddToCart />
                    </div>
                </div>
            </div>

            {/* 手機螢幕*/}
            <div className="md:hidden">
                <div className="w-3/5 mx-auto flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 mb-[10rem] py-5 rounded-3xl">
                    <img
                        src={food.pic}
                        alt=""
                        className="w-1/3 mt-15" />


                    <div className="w-full px-4 mb-0">
                        <div className="flex justify-start items-center gap-[1.5rem] mx-[3rem]">
                            <Heart />
                            <button className="border border-black border-[2px] rounded-2xl px-[1rem] py-[0.1rem] text-[0.9rem] text-black transition-all duration-400 hover:bg-red-300 hover:border-none hover:text-white cursor-pointer group-hover:scale-105"> Comments </button>
                        </div>
                    </div>


                    <div className="w-full px-4 flex justify-start -mt-3">
                        <h3 className="text-[1.5rem]  mx-[3rem] font-semibold">{food.name}</h3>
                    </div>


                    <div className="w-full px-4 flex justify-start items-center -mt-3">
                        <p className="mx-[3rem] text-[1.1rem] w-[8rem]">{food.information}</p>
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
                    <div className="flex w-full">
                        <div className="w-full px-4 mb-[2rem]">
                            <p className="ml-[3rem] text-left text-[#631616] font-md text-[1rem]"> ${food.price}NTD</p>
                        </div>
                        <AddToCart />
                    </div>

                </div>


            </div>
        </>
    )




}




export default FoodDetail;