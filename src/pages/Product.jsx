import FoodList from "../components/FoodList";
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import breakfast from "../json/breakfast.json"




export default function Product(){


    return(
        <div>
            <Header
                title="商品列表"
            />
            <NavBar/>
            <FoodList breakfast={breakfast} />
            <Footer/>
        </div>
    )
}