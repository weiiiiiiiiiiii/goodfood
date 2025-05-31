import { Star } from "lucide-react"

const CommentList = ({ comments }) => {
    return (
        <div className="px-[3rem] space-y-8">

            {/* 讀取留言資料 */}
            {comments.length === 0 && <p className="text-center text-gray-500">尚無留言</p>}
            {comments.map(({ id, rating, comment, user, date }) => (
                <div className="flex w-full bg-[#DFB4B4] rounded-4xl shadow-sm">
                    {/* 頭像 */}
                    <div className="flex items-center px-8">
                        <img className="rounded-full w-15 h-15" src="/logo2.png" alt="" />
                    </div>

                    {/* 星星與文字 */}
                    <div key={id} className="p-4 space-y-2 flex flex-col text-left">
                        <span className="text-base text-white">{user || "匿名"} - {new Date(date).toLocaleDateString()}</span>

                        <div className="flex items-center space-x-1 mb-1">
                            {/*  星星 */}
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i <= rating ? "text-yellow-400" : "text-white"}`}
                                    fill={i <= rating ? "#facc15" : "none"}
                                />
                            ))}

                        </div>

                        <p className="whitespace-pre-wrap">{comment}</p>
                    </div>
                </div>

            )
            )}
        </div>
    )
}

export default CommentList