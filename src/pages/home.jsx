import breakfast from "../json/breakfast.json"

import FoodList from "../components/FoodList";
import Header from "../components/header";
import Footer from "../components/footer";


function Home() {
    return (

        <div className="main-layout">
            <Header
                title="好食 Breakfast"
            />
            <FoodList breakfast={breakfast}/>
            <Footer/>
        </div>

    )

}

export default Home;