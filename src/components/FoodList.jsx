import FoodItems from "./FoodItems"

function FoodList({ breakfast }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-20">
            {breakfast.map((food) => (
                <FoodItems key={food.id} food={food} />
            ))}
        </div>
    )
}

export default FoodList