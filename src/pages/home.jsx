import { Helmet } from 'react-helmet-async';
import Header from "../components/header";
import Footer from "../components/footer";
import Concept from "../components/Concept";
import HotList from "../components/HotList/HotList";
import Environment from "../components/Environment/Environment";
import MotionDiv from "../motion/MotionDiv";
import Ham from "../components/Ham";

import { useFoodById2 } from '../react-query'
// import breakfast from "../json/breakfast.json"

function Home() {
    const { data, isLoading } = useFoodById2();
    const title = "好食 Breakfast";

    if (isLoading || !data) {
        return (
            <MotionDiv className="MainLayout">
                <div className="main-layout m-0 p-0">
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                    <Header title={title} />
                    <Ham />
                    <Concept />
                    <Environment />
                    <div className="text-center py-10 text-lg text-gray-500">載入中...</div>
                    <Footer />
                </div>
            </MotionDiv>
        );
    }

    return (
        <MotionDiv className="MainLayout">
            <div className="main-layout m-0 p-0">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header title={title} />
                <Ham />
                <Concept />
                <Environment />
                <HotList breakfast={data} />
                <Footer />
            </div>
        </MotionDiv>
    );
}

export default Home;