import { useParams } from "react-router";
import { Helmet } from "react-helmet-async"
import _ from "lodash"

import Header from "../components/header";
import Ham from "../components/Ham";
import NavBar from "../components/NavBar";
import FoodList from "../components/FoodList";
import Footer from "../components/footer";

// import breakfast from "../json/breakfast.json"
import { useFoodByCategory } from '../react-query'

function Category() {
    const { foodcategory } = useParams();
    const { data, isLoading } = useFoodByCategory(foodcategory);
    // const _breakfast = foodcategory
    //     ? breakfast.filter(x => x?.category?.toUpperCase() === foodcategory.toUpperCase())
    //     : breakfast;

    // 如果有foodcategory，使用它来转换为标题；如果没有，使用 "All" 作为标题
    // const title = foodcategory ? _.startCase(foodcategory) : "All";
    const _breakfast = data || [];
    const title = _.startCase(foodcategory);

    return (
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header
                    title={title}
                />
                <Ham />
                <NavBar />
                <FoodList breakfast={_breakfast} isLoading={isLoading} className="content"/>
                <Footer />
            </div>
    )
}

export default Category