import breakfast from '../json/breakfast.json'
import Header from '../components/header'
import FoodDetail from '../components/FoodDetail'
import Footer from '../components/footer'
import { useParams } from 'react-router'
import Ham from '../components/Ham'


function Detail() {

    const { foodid } = useParams();
    const food = breakfast.find(
        (x) => x.id === Number(foodid)
    )
    return (
        <div className='bg-[#F3EBE6]'>
            <Header
                title="好好食"
            />
            <Ham/>
            <FoodDetail food={food} />
            <Footer />


        </div>


    )
}


export default Detail;




