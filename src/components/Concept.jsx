import { motion } from "framer-motion";


function Concept() {
    return (
        <>
            <div className="relative pt-[10rem] h-[40rem] font-bold mb-[15rem]">

                <div className="absolute inset-0 bg-[url('/背景.jpg')] h-[40rem] bg-cover bg-center z-0">
                </div>

                {/* 半透明遮罩 */}
                <div className="absolute inset-0 bg-black opacity-35 z-10"></div>

                {/* 內容區塊 */}

                <motion.div  
                    initial={{x : "-40%"}}
                    whileInView={{x:0}}
                    transition={{
                        type: "tween",
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="relative z-20"
                >

                    <div className=" text-[2rem] mb-[2rem] text-left pl-[6rem]">
                        <p>一份早餐 一段記憶</p>
                    </div>
                    <div className="text-[2rem]  mb-[2rem] text-left pl-[8rem]">
                        <p>放慢腳步 享受時光</p>
                    </div>
                    <div className=" text-[2rem] text-left pl-[10rem]">
                        <p>好食相伴 祝你好食</p>
                    </div>
                </motion.div  >
            </div>

        </>
    )

}

export default Concept;
