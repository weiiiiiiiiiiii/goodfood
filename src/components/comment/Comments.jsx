import { useState } from "react"
import CommentList from "./CommentList";
import InputComment from "./InputComment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const handleSubmit=({rating,comment})=>{
        const newComment={
            id:Date.now(),
            rating,
            comment,
            user:"使用者名稱",
            date:new Date().toISOString(),
        };
        setComments((prev)=>[newComment,...prev])
    };

    return(
        <div>
            <CommentList comments={comments}/>
            <InputComment onSubmit={handleSubmit}/>
        </div>
    )
}

export default Comments