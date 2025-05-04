export default function HotItems({food}){
    return(
        <div className="border w-50 h-50 bg-white rounded-lg grid gird-col justify-center ">
            <img className="w-40 pt-2" src={food.pic} alt={food.name} />
            <h2 className="pb-2">{food.name}</h2>
        </div>
    )
}