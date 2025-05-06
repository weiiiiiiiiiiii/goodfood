import { useParams } from "react-router";
import breakfast from "../json/breakfast.json"
import _ from "lodash"

import Header from "../components/header";
import FoodList from "../components/FoodList";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function Category() {
    const { foodcategory } = useParams();

    const _breakfast = foodcategory
        ? breakfast.filter(x => x?.category?.toUpperCase() === foodcategory.toUpperCase())
        : breakfast;
    
    // 如果有foodcategory，使用它来转换为标题；如果没有，使用 "All" 作为标题
    const title = foodcategory ? _.startCase(foodcategory) : "All";

    return (
        <div>
            <Header  
                title={title}
            />
            <NavBar/>
            <FoodList breakfast={_breakfast} />
            <Footer/>
        </div>

    )
}

export default Category