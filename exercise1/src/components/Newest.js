import React from 'react'
import './Newest.css'

export default function newest(props) {
    return (
        <div className='NewestContainer'>
            <span>{props.topic}:</span>{props.body}
        </div>
    )
}

