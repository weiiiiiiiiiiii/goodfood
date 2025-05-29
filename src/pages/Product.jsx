import { Helmet } from 'react-helmet-async';
import Header from "../components/header";
import Ham from "../components/Ham";
import NavBar from "../components/NavBar";
import FoodList from "../components/FoodList";
import Footer from "../components/footer";
import MotionDiv from "../motion/MotionDiv";

// import breakfast from "../json/breakfast.json"
import { useFood } from '../react-query'




export default function Product() {
    const title = "商品列表"
    const { data, isLoading } = useFood();
    const breakfast = data
    return (
        <MotionDiv className="MainLayout">
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>

                <Header
                    title={title}
                />
                <Ham/>
                <NavBar />
                <FoodList breakfast={breakfast} isLoading={isLoading} className="content" />
                <Footer />
            </div>
        </MotionDiv>
    )
}