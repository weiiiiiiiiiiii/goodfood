import FoodItems from "./FoodItems"

function FoodList({ breakfast }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pb-[8rem] px-15 px-8 md:px-15 lg:px-20 bg-[#F3EBE6]">
            {breakfast.map((food) => (
                <FoodItems key={food.id} food={food} />
            ))}
        </div>
    )
}

export default FoodList