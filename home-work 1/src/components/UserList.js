import React, {Component} from 'react'
import UserListItem from './UserListItem'

class UserList extends Component {
    render() {
        const { usersArr } = this.props;
        return (
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Tel</th>
                        </tr>
                        {usersArr.map( user => (
                            <UserListItem key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
        )
    }
}

export default UserList