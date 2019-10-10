import React, {Component} from 'react'
import UserListInfo from './UserListInfo'

class UserList extends Component {
    render() {
        const { usersObj } = this.props;
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Tel</th>
                        </tr>
                        {usersObj.map( user => (
                            <UserListInfo key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default UserList