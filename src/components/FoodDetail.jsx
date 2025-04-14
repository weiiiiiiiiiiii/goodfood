function FoodDetail({ food }) {
    return (
        <div className="">
            <div className="w-3/5 mx-auto flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 py-5 rounded-3xl">
                <img
                    src={food.pic}
                    alt=""
                    className="w-1/4 mt-15" />


                <div className="w-full px-4 mb-0">
                    <div className="flex justify-start items-center gap-[2rem] mx-[3rem]">
                        <img src="/heart.svg" alt="Heart Icon" className="w-[2.2rem] h-[2.2rem]" />
                        <button className="border rounded-2xl px-[0.6rem] text-[1.2rem]"> Comments </button>
                    </div>
                </div>


                <div className="w-full px-4 flex justify-start -mt-3">
                    <h3 className="text-[2rem]  mx-[3rem] font-semibold">{food.name}</h3>
                </div>


                <div className="w-full px-4 flex justify-start -mt-3">
                    <p className="mx-[3rem] text-[1.3rem]">{food.information}</p>
                    <button className="border rounded-sm px-[0.7rem] text-[1rem] -ml-[1.5rem] bg-[#D9D9D9] text-[#424242] border-[#424242]">詳細資訊</button>
                </div>


                <div className="w-full px-4 -mt-3 ">
                   
                    <textarea
                        placeholder="備註:"
                        className="w-[88%] ml-0 p-3 rounded-lg bg-[#D9D9D9] text-[1rem] resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        rows="4"
                    >
                    </textarea>
                </div>
                <div className="w-full px-4 mb-[2rem]">
                    <p className="ml-[3rem] text-left text-[#631616] font-md text-[1.2rem]"> ${food.price}NTD</p>
                </div>
            </div>


        </div>
    )




}




export default FoodDetail;