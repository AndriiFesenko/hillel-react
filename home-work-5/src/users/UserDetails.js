import React from 'react'

export default function UserDetails(props) {
    return (
        <div className="user-info">
            <h3>User Details</h3>
            <h4>{props.userId}</h4>
        </div>
    )
}
