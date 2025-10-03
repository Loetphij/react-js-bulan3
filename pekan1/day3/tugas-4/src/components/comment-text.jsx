import UserInfo from "./user-info.jsx";

function Comment({author, text, date}) {
    return (
        <div className="comment" style={{border: "2px solid #999", padding:'15px', margin: '10px', borderRadius:'10px'}}>
            <UserInfo user={author}/>
            <div className="comment-text">
                {text}
            </div>
            <div className="comment-date" style={{fontSize: '1em', color: '#333'}}>
                {date.toLocaleDateString()}
            </div>
        </div>
    )
}

export default Comment