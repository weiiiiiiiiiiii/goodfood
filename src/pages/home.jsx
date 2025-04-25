import breakfast from "../json/breakfast.json"

import FoodList from "../components/FoodList";
import Header from "../components/header";
import Footer from "../components/footer";
// import NavBar from "../components/NavBar";
import Concept from "../components/Concept";


function Home() {
    return (   
        <div className="main-layout m-0 p-0">
            <Header
                title="好食 Breakfast"
            />
            <Concept />
            <FoodList breakfast={breakfast}/>
            <Footer/>
        </div>

    )

}

export default Home;