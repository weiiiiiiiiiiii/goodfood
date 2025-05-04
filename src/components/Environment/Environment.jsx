import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Environment.css'

import 'swiper/css';
import 'swiper/css/navigation';

export default function Environment() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-[2rem]">

            {/* 文字介紹 */}
            <div className='pb-5'>
                <h1 className="text-2xl lg:text-3xl text-left pl-[5rem] pb-5">店內環境</h1>
                <div className="w-100 h-50 md:w-200 md:h-70 lg:w-150 lg:h-75 pt-5 md:pt-12 lg:pt-10 bg-[#C6B5A9] ">
                    <h2 className="text-base lg:text-lg text-left pl-[5rem] pb-5 leading-loose md:leading-[2.5rem]">
                        木質調文青風格裝潢<br />
                        搭配溫暖的黃白色燈光<br />
                        輕柔的背景音樂<br />
                        讓人能夠悠閒享受餐點
                    </h2>
                </div>
                <div className='bg-[#F5F5F5] w-40 h-30 md:w-90 md:h-50 lg:w-70 lg:h-40 translate-x-[300px] translate-y-[-80px] md:translate-x-[500px] md:translate-y-[-100px] lg:translate-x-[400px]'></div>
            </div>

            {/* 輪播器 */}
            <div className="flex justify-center pb-10 lg:pb-0">
                <div className="w-110 md:w-200 lg:w-180 pr-0 lg:pr-[1rem]">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        slidesPerView={1}

                    >
                        <SwiperSlide><img className=" w-110 md:w-200 lg:w-180" src="/環境/環境1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" w-110 md:w-200 lg:w-180" src="/環境/環境1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" w-110 md:w-200 lg:w-180" src="/環境/環境1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" w-110 md:w-200 lg:w-180" src="/環境/環境1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" w-110 md:w-200 lg:w-180" src="/環境/環境1.png" alt="" /></SwiperSlide>

                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </Swiper>
                </div>
            </div>

        </div>
    )
}