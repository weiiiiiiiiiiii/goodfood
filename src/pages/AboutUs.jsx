import Footer from "../components/footer";
import Ham from "../components/Ham";
import Header from "../components/header";
import MotionDiv from "../motion/MotionDiv";

function AboutUs() {
    return (
        <MotionDiv className="MainLayout">
            <div className="bg-[#F3EBE6]">
                <Header
                    title="關於我們"
                />
                <Ham/>
                <div className="flex flex-col bg-white/60 mx-5 md:mx-30 lg:mx-60 py-10 mt-10">
                    <p className="leading-15 text-base md:text-lg lg:text-xl">
                        好食早午餐 是大部分國北學生的回憶<br />
                        這裡提供了更新穎、有趣的菜單及選購模式<br />
                        在網站上即可看到各式餐點的模樣
                    </p>
                </div>
                <div className="grid justify-center mt-15">
                    <p className="py-1 font-black text-2xl bg-[#EAFFEA] w-30 rounded-2xl">創作者</p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-[5rem]  lg:gap-[15rem] w-fit mx-auto pb-5">

                    <div className="grid grid-row w-80 md:w-50 lg:w-80 py-5">
                        <div>
                            <img className="w-full bg-[#EAFFEA]/50 rounded-t-xl" src="/creator/wei.PNG" alt="" />
                        </div>
                        <div className="text-center bg-[#EAFFEA] h-40 rounded-b-xl">
                            <p className="font-bold pt-5 text-lg">
                                RWeiii
                            </p>
                            <p className="pt-2">
                                自我介紹
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-row w-80 md:w-50 lg:w-80 py-5">
                        <div>
                            <img className="w-full bg-[#EAFFEA]/50 rounded-t-xl" src="/creator/rice.PNG" alt="" />
                        </div>
                        <div className="text-center bg-[#EAFFEA] h-40 rounded-b-xl">
                            <p className="font-bold pt-5 text-lg">
                                Rice
                            </p>
                            <p className="pt-2">
                                最喜歡薯餅塔+紅茶 <br />
                                設計美感0的人類<br />

                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </MotionDiv>
    )
}

export default AboutUs