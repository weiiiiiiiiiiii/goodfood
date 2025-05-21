import FoodList from "../components/FoodList";
import Footer from "../components/footer";
import Ham from "../components/Ham";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import breakfast from "../json/breakfast.json"
import MotionDiv from "../motion/MotionDiv";




export default function Product() {


    return (
        <MotionDiv className="MainLayout">
            <div>
                <Header
                    title="商品列表"
                />
                <Ham/>
                <NavBar />
                <FoodList breakfast={breakfast} />
                <Footer />
            </div>
        </MotionDiv>
    )
}