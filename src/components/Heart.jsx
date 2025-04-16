import { useState } from "react"

function Heart() {
    const [liked, setLiked] = useState(false);

    return (
        <>
            {/* 電腦螢幕*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setLiked(!liked)}
                viewBox="-2 0 36 29.6"
                fill={liked ? "red" : "none"}
                stroke={liked ? "red" : "currentColor"}
                strokeWidth="2"
                className={`hidden md:flex w-[2.6rem] h-[2.6rem] text-black transition-colors duration-200 cursor-pointer hover:fill-red-300
                        ${liked ? "text-red-500" : "text-black-400"}`}

            >


                <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
                                    c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>

            {/* 手機螢幕*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setLiked(!liked)}
                viewBox="-2 0 36 29.6"
                fill={liked ? "red" : "none"}
                stroke={liked ? "red" : "currentColor"}
                strokeWidth="2"
                className={`md:hidden w-[2rem] h-[2rem] text-black transition-colors duration-200 cursor-pointer hover:fill-red-300
                        ${liked ? "text-red-500" : "text-black-400"}`}

            >


                <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
                                    c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
        </>


    )


}

export default Heart;