import React, { Component } from 'react'
import ContactListItem from './ContactListItem'
import contactsList from './contactsList.css'

export class ContactsList extends Component {
    render() {
        const { contacts, onAddContact, onUserClick } = this.props;
        return (
                <div className="contacts-wrapper" onClick={onUserClick}>
                    <div className ="contacts-heading">
                        <span>Name</span>
                        <span>Surname</span>
                    </div>
                    {contacts.map((contact) => (
                        <ContactListItem 
                            key={contact.id} 
                            contact={contact}/>
                    ))}
                    <button onClick={onAddContact}>Add Contact</button>
                </div>
        )
    }
}

export default ContactsList;
