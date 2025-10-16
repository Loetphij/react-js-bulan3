import useFriendStatus from "./useFriendStatus";

export default function FriendStatus({ friendId }) {
    const isOnline = useFriendStatus(friendId) 

    if (isOnline === null) {
        return 'Memuat. . .'
    }

    return isOnline ? 'Online' : 'Offline'
}