import HotItems from "../HotItems"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import './HotList.css'

import 'swiper/css';
import 'swiper/css/scrollbar';


function HotList({ breakfast }) {
    return (
        <div className="bg-[#F3EBE6]  pb-20 ">

            {/* 標題 */}
            <div className="flex pt-15 pb-20 items-center justify-center gap-5">
                <hr className="text-[#E5C049] w-50 md:w-80 lg:w-150 border-1" />
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E5C049]">人氣美食</h1>
                <hr className="text-[#E5C049] w-50 md:w-80 lg:w-150 border-1" />
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
                    {breakfast
                        .filter((food) => food.id2 !== undefined)
                        .map((food) => (
                            <SwiperSlide key={food.id2}>
                                <HotItems food={food} />
                            </SwiperSlide>

                        ))}
                </Swiper>
            </div>


        </div>

    )
}

export default HotList