// import { div, span } from "framer-motion/client"
import FoodItems from "./FoodItems"
import Top from "./Top";

function FoodList({ breakfast, isLoading }) {
    return (
        <>
            {isLoading
                ? (
                    <div className="flex justify-center mt-[20vh]">
                        <span className="loading loading-spinner loading-xl"></span>
                    </div>
                ): (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pb-[8rem] px-15 px-8 md:px-15 lg:px-20 bg-[#F3EBE6]">
                        {breakfast.map((food) => (
                            <FoodItems key={food.id} food={food} />
                        ))}
                        <Top/>
                    </div>
                )
            }
        </>
    );
}

export default FoodList