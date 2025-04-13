import breakfast from '../json/breakfast.json'
import Header from '../components/header'
import FoodDetail from '../components/FoodDetail'
import { useParams } from 'react-router'


function Detail(){
    return(
        <div>
            <Header />
            <FoodDetail />
           
        </div>


    )


}




export default Detail;