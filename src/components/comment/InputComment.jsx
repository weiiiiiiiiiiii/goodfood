import { Star } from "lucide-react"
import { useState } from "react"


const InputComment = ({ onSubmit }) => {

    // 星星
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // 留言
    const [comment, setComment] = useState("");

    // 偵測星星與留言是否有資料，否則跳出視窗提示
    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("請給星星評價！");
            return;
        }
        onSubmit?.({ rating, comment });
        setRating(0);
        setComment("");
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 mx-[3rem] px-5 py-3 md:p-5 space-x-5 bg-[#DFB4B4] rounded-4xl shadow flex items-center" >

            <img className="w-10 h-10 md:w-15 md:h-15 rounded-full" src="/logo2.png" alt="" />
            {/* 星星評分 */}
            <div className="space-y-2 w-full">
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) =>
                        <Star
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className={`w-4 h-4 md:w-5 md:h-5 cursor-pointer transition-colors 
                            ${(hoverRating || rating) >= star ? "text-yellow-400" : "text-gray-300"}`}
                            fill={(hoverRating || rating) >= star ? "#facc15" : "none"}
                        />
                    )}
                </div>

                {/* 留言框 */}
                <div className="flex flex-row items-center gap-5">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="留個言吧..."
                        className="textarea flex-grow w-full min-h-[20px] md:min-h-[45px] p-2 bg-white/50 resize-none focus:outline-none"
                        required
                    />

                    <button type="submit" className="btn text-sm">
                        發布
                    </button>
                </div>
            </div>

        </form>
    )
}

export default InputComment