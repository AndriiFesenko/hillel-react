import React, { Component } from 'react'

export class ContactListItem extends Component {
    render() {
        const { contact } = this.props;
        return(
            <div className="user-wrapper" id={contact.id}>
                <span className="name">{contact.name}</span>
                <span className="surname">{contact.surname}</span>
            </div>
        )
    }
}

export default ContactListItem;

