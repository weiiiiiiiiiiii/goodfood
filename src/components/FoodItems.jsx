import { Link } from "react-router"

function FoodItems({ food }) {
    return (
        <>
            <div className="hidden md:flex">
                <section className="pt-2 md:px-5 lg:px-4">
                    <div className="rounded-sm my-3 md:mx-1 lg:my-10 lg:mx-4 bg-[#EAFFEA] shadow-[0_8px_10px_gray] transform transition-transform duration-300 hover:scale-102">
                        <Link to={`/breakfast/id/${food.id}`}>
                            <img className="rounded-t-sm bg-white p-3 w-full" src={food.pic} alt={food.name} />
                            <div className="text-center py-2 px-3">
                                <h1 className="font-bold text-lg">
                                    {food.name}
                                </h1>
                                <h2 className="opacity-60 text-[13px]">
                                    {food.short_information}
                                </h2>
                                <p className="text-right font-bold">
                                    ${food.price}
                                </p>
                            </div>
                        </Link>
                    </div>

                </section>
            </div>

            <div className="md:hidden">
                <section className="pt-2">
                    <div className="rounded-sm h-30 my-3 bg-[#EAFFEA] shadow-[0_8px_10px_gray] transform transition-transform duration-300 hover:scale-102">
                        <Link to={`/breakfast/id/${food.id}`} className="flex">
                            <img className="rounded-l-sm bg-white p-3 w-30" src={food.pic} alt={food.name} />
                            <div className="w-full text-left pl-3">
                                <h1 className="font-bold text-lg pt-3">
                                    {food.name}
                                </h1>
                                <h2 className="opacity-60 text-sm pt-1">
                                    {food.short_information}
                                </h2>
                                <p className="text-right font-bold pr-2 absolute bottom-2 right-2">
                                    ${food.price}
                                </p>
                            </div>
                        </Link>
                    </div>

                </section>
            </div>

        </>
    )
}

export default FoodItems