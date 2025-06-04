import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig"; // 路徑依你自己的專案調整

function Heart({ foodId }) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        const fetchLikes = async () => {
            const foodDoc = await getDoc(doc(db, "breakfast", foodId));
            if (foodDoc.exists()) {
                const data = foodDoc.data();
                setLikesCount(data.likes || 0);
            }
        };
        fetchLikes();
    }, [foodId]);

    const handleLikeClick = async () => {
        const foodRef = doc(db, "breakfast", foodId);
        const foodDoc = await getDoc(foodRef);
        if (!foodDoc.exists()) return;

        const currentLikes = foodDoc.data().likes || 0;
        const newLiked = !liked;
        const newLikes = newLiked ? currentLikes + 1 : currentLikes - 1;

        await updateDoc(foodRef, {
            likes: newLikes,
        });

        setLiked(newLiked);
        setLikesCount(newLikes);
    };

    return (
        <div className="flex items-center space-x-2">
            {/* 電腦版 */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleLikeClick}
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

            {/* 手機版 */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleLikeClick}
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

            {/* 讚數 */}
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">{likesCount}  likes</span>
        </div>
    );
}

export default Heart;
