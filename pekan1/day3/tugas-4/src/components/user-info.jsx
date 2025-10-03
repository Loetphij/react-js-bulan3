import Avatar from "./avatar.jsx";

function UserInfo({user}) {
    return (
        <div className="user-info">
            <Avatar user={user} />
            <div className="user-info-name">{user.name}</div>
        </div>
    )
}

export default UserInfo