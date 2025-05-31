import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Environment.css'
import { motion } from 'framer-motion';


import 'swiper/css';
import 'swiper/css/navigation';

export default function Environment() {
    return (



        <div className="grid grid-cols-1 lg:grid-cols-2 pb-[2rem]">

            {/* 文字介紹 */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className='pb-5'>
                    <h1 className="text-2xl lg:text-3xl text-left pl-[5rem] pb-5">店內環境</h1>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true ,amount: 0.7}}
                    >
                        <div className="w-100 h-50 md:w-200 md:h-70 lg:w-150 lg:h-75 pt-5 md:pt-12 lg:pt-10 bg-[#C6B5A9] ">
                            <h2 className="text-base lg:text-lg text-left pl-[5rem] pb-5 leading-loose md:leading-[2.5rem]">
                                木質調文青風格裝潢<br />
                                搭配溫暖的黃白色燈光<br />
                                輕柔的背景音樂<br />
                                讓人能夠悠閒享受餐點
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true ,amount: 0.7 }}
                    >
                        <div className='flex justify-center items-center text-center bg-[#EBC7AF] w-40 h-30 md:w-90 md:h-50 lg:w-70 lg:h-40 translate-x-[300px] translate-y-[-80px] md:translate-x-[500px] md:translate-y-[-100px] lg:translate-x-[400px]'>
                            {/* <img className='w-30 h-20 md:w-60 md:h-30 lg:w-45 lg:h-25 ' src="./logo2.png" alt="" /> */}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* 輪播器 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true ,amount: 0.6 }}
            >
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
                            <SwiperSlide><img className=" w-110 md:w-200 lg:w-180 h-80 md:h-130 lg:h-115" src="/環境/環境1.JPG" alt="" /></SwiperSlide>
                            <SwiperSlide><img className=" w-110 md:w-200 lg:w-180 h-80 md:h-130 lg:h-115" src="/環境/環境2.JPG" alt="" /></SwiperSlide>
                            <SwiperSlide><img className=" w-110 md:w-200 lg:w-180 h-80 md:h-130 lg:h-115" src="/環境/環境3.JPG" alt="" /></SwiperSlide>
                            <SwiperSlide><img className=" w-110 md:w-200 lg:w-180 h-80 md:h-130 lg:h-115" src="/環境/環境4.JPG" alt="" /></SwiperSlide>

                            <div className="swiper-button-prev" />
                            <div className="swiper-button-next" />
                        </Swiper>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}