import { useParams } from 'react-router'
import { Helmet } from "react-helmet-async"
import Header from '../components/header'
import Ham from '../components/Ham'
import FoodDetail from '../components/FoodDetail'
import Footer from '../components/footer'

// import breakfast from '../json/breakfast.json'
import { useFoodById } from '../react-query'

function Detail() {

    const { foodid } = useParams();
    const { data, isLoading } = useFoodById(foodid);
    const food = data || {};
    // const food = breakfast.find(
    //     (x) => x.id === Number(foodid)
    // )
    const title = "好好食"
    return (
        <div className='bg-[#F3EBE6]'>
            <div className="container mx-auto">
                <Helmet>
                    <title>{title}</title>
                </Helmet>

                <Header
                    title={title}
                />
                <Ham />
                <FoodDetail food={food} isLoading={isLoading} className="content"/>
                <Footer />

            </div>
        </div>


    )
}


export default Detail;




