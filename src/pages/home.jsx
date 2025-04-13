import breakfast from "../json/breakfast.json"

import FoodList from "../components/FoodList";
import Header from "../components/header";


function Home() {
    return (

        <div className="main-layout">
            <Header
                title="好食 Breakfast"
            />
            <FoodList breakfast={breakfast}/>
        </div>

    )

}

export default Home;