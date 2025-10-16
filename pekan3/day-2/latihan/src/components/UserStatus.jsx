import React, {} from "react";
import useFriendStatus from "./useFriendStatus";

export default function UserStatus() {
    const isOnline = useFriendStatus(0)

    if (isOnline === null) {
        return 'Memuat status Anda . . .'
    }

    return isOnline ? 'Online' : 'Offline'
}