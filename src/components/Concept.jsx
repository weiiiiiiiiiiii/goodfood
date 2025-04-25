import { useEffect } from "react";
import gsap from "gsap";


function Concept() {

    useEffect(() => {
        gsap.to(".concept", {
            x: 0,              // 回到原位
            opacity: 1,        // 顯示出來
            duration: 1.8,
            ease: "power2.out",
        });
    }, []);

    return (
        <>
            <div className="relative pt-[10rem] h-[40rem] font-bold mb-[15rem]">

                <div className="absolute inset-0 bg-[url('/背景.jpg')] h-[40rem] bg-cover bg-center z-0">
                </div>

                {/* 半透明遮罩 */}
                <div className="absolute inset-0 bg-black opacity-35 z-10"></div>

                {/* 內容區塊 */}
                <div className="relative z-20">

                    <div className=" text-[2rem] mb-[2rem] text-left pl-[6rem]">
                        <p className="concept -translate-x-[800px] opacity-0">一份早餐 一段記憶</p>
                    </div>
                    <div className="text-[2rem]  mb-[2rem] text-left pl-[8rem]">
                        <p className="concept -translate-x-[800px] opacity-0">放慢腳步 享受時光</p>
                    </div>
                    <div className=" text-[2rem] text-left pl-[10rem]">
                        <p className="concept -translate-x-[800px] opacity-0">好食相伴 祝你好食</p>
                    </div>
                </div >
            </div>


        </>
    )

}

export default Concept;
