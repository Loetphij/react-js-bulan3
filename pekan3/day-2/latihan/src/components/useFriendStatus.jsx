import React, { useEffect, useState } from "react";

export default function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const checkStatus = () => {
            const status = friendId % 2 === 0 ? true : false
            setIsOnline(status)
        }

        checkStatus()
        const intervalId = setInterval(checkStatus, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [friendId])

    return isOnline
}