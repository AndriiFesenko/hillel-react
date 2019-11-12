import React from 'react'
import {Link} from 'react-router-dom'

export default function UsersListItem({user}) {

    return (
        <li>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <button>Delete</button>
        </li>
    )
}

