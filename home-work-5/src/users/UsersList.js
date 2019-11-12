import React, {useState, useEffect} from 'react'
import config from './config'
import UsersListItem from './UsersListItem'

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        fetch(config.usersUrl)
            .then(resp => resp.json())
            .then(data => {
                if(isSubscribed){
                    setUsers(data)
                }
            })
        return () => isSubscribed = false;
    }, [])
    return (
        <ul className="users-list">
            {users.map(user => (
                <UsersListItem 
                    key={user.id} 
                    user={user} />
            ))}
        </ul>
    )
}
