import React, {Component} from 'react'

class UserListItem extends Component {
    render() {
        const { user } = this.props;
        return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.age}</td>
                    <td>{user.tel}</td>
                </tr>
            )
    }
}

export default UserListItem