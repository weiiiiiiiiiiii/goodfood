import { useParams } from "react-router";
import breakfast from "../json/breakfast.json"
import Header from "../components/header";
import FoodList from "../components/FoodList";
import Footer from "../components/footer";

function Category() {
    const { foodcategory } = useParams();
    const _breakfast = breakfast.filter(
        x => x?.category?.toUpperCase() === foodcategory.toUpperCase()
    );
    const title = _.startCase(foodcategory);


    return (
        <div>
            <Header  
                title={title}
            />
            <FoodList breakfast={_breakfast} />
            <Footer/>
        </div>

    )
}

export default Category