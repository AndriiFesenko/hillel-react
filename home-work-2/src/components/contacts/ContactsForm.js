import React, { Component } from 'react'

export class ContactsForm extends Component {
    render() {
        const { onSaveBttnClick, onDeleteBttnClick } = this.props;
        return (
            <form>
                <label>Name:</label>
                <input type="text" id="name"/>
                <label>Surname:</label>
                <input type="text" id="surname"/>
                <div className="bttn-wrapper">
                    <button id="save" onClick={onSaveBttnClick}>Save</button>
                    <button id="delete" onClick={onDeleteBttnClick}>Delete</button>
                </div>
            </form>
        )
    }
}

export default ContactsForm;