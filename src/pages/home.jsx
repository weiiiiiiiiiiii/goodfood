import breakfast from "../json/breakfast.json"

import Header from "../components/header";
import Footer from "../components/footer";
import Concept from "../components/Concept";
import HotList from "../components/HotList/HotList";
import Environment from "../components/Environment/Environment";
import MotionDiv from "../motion/MotionDiv";
import Ham from "../components/Ham";




function Home() {

    return (

        <MotionDiv className="MainLayout">
            <div className="main-layout m-0 p-0">
                <Header
                    title="好食 Breakfast"
                />
                <Ham/>
                <Concept />
                <Environment />
                <HotList breakfast={breakfast} />
                <Footer />
            </div>
        </MotionDiv>

    )

}

export default Home;