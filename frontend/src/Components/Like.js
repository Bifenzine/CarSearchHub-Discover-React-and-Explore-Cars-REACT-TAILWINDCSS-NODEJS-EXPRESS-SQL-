import { HeartBrokenOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Like = ({ likes }) => {
    const [count, setCount] = useState(likes)

    const handleLike = () => {
        if (likes === count) {

            setCount(count + 1)
            // setIsVisible(true)
        } else {

            setCount(count - 1)

        }
    }

    return (
        <span onClick={handleLike}><HeartBrokenOutlined className={likes === count ? 'animate-pulse ' : 'text-indigo-600'} />{count} </span>

    )
}

export default Like