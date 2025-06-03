import HotItems from "../HotItems"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import './HotList.css'
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/scrollbar';

function HotList({ breakfast, isLoading }) {

    if (isLoading || !Array.isArray(breakfast)) {
        return <div className="text-center py-10">載入中...</div>;
    }

    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
        >
            <div className="bg-[#F3EBE6] pb-20 ">
                {/* 標題 */}
                <div className="flex pt-15 pb-20 items-center justify-center gap-5">
                    <hr className="text-[#E5C049] w-45 md:w-80 lg:w-150 border-1" />
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E5C049]">人氣好食</h1>
                    <hr className="text-[#E5C049] w-45 md:w-80 lg:w-150 border-1" />
                </div>


                {/* 滾動顯示人氣商品，用json中的id2項目 */}
                <div className="px-[8rem] lg:px-[10rem] ">
                    <Swiper
                        modules={[Scrollbar]}
                        scrollbar={{ draggable: true }}
                        spaceBetween={20}
                        breakpoints={{
                            // 當螢幕寬度 >= 640px 時
                            640: { slidesPerView: 2 },


                            // 當螢幕寬度 >= 768px 時
                            768: { slidesPerView: 3 },


                            // 當螢幕寬度 >= 1024px 時
                            1024: { slidesPerView: 4 },
                        }}
                        className="custom-swiper"
                    >
                        {Array.isArray(breakfast) && breakfast.map((food) => (
                            <SwiperSlide key={food.id}>
                                <HotItems food={food} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>




            </div>

        </motion.div>
    )
}


export default HotList

