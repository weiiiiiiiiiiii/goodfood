import breakfast from '../json/breakfast.json'
import Header from '../components/header'
import FoodDetail from '../components/FoodDetail'
import Footer from '../components/footer'
import { useParams } from 'react-router'


function Detail() {

    const { foodid } = useParams();
    const food = breakfast.find(
        (x) => x.id === Number(foodid)
    )
    return (
        <div>
            <Header
                title="好好食"
            />
            <FoodDetail food={food} />
            <Footer />


        </div>


    )
}


export default Detail;




