import { Link } from "react-router"

function FoodItems({ food }) {
    return (

        <section className="pt-2 px-10 lg:px-4">
            <div className="my-10 mx-4 bg-[#EAFFEA] shadow-[0_8px_10px_gray] transform transition-transform duration-300 hover:scale-102">
                <Link to={`/breakfast/id/${food.id}`}>
                    <img className="bg-white p-3 w-full" src={food.pic} alt={food.name} />
                    <div className="text-center py-2 px-3">
                        <h1 className="font-bold text-lg">
                            {food.name}
                        </h1>
                        <h2 className="opacity-60 text-sm">
                            {food.short_information}
                        </h2>
                        <p className="text-right font-bold">
                            ${food.price}
                        </p>
                    </div>
                </Link>
            </div>

        </section>

    )
}

export default FoodItems