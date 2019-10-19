import React, { Component } from 'react'

export class ContactsForm extends Component {
    state = {
        name:'',
        surname:''
    }
    onInputNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onInputSurnameChange = (e) => {
        this.setState({
            surname: e.target.value
        })
    }
    render() {
        const { onSaveBttnClick, onDeleteBttnClick, contact, formDisplay } = this.props;
        return (
            <form 
                style={formDisplay == 'none' ? {display:'none'}:{display:'block'}}
                >
                <label>Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={this.state.name == '' ? contact.name : this.state.name}
                    onChange={this.onInputNameChange}/>
                <label>Surname:</label>
                <input 
                    type="text" 
                    id="surname" 
                    value={this.state.surname == '' ? contact.surname : this.state.surname}
                    onChange={this.onInputSurnameChange}/>
                <div className="bttn-wrapper">
                    <button id="save" onClick={onSaveBttnClick.bind(this, this.state.name, this.state.surname)}>Save</button>
                    <button 
                        id="delete" 
                        onClick={onDeleteBttnClick}
                        style={contact == 'none' ? {display:'none'}:{display:'block'}}
                        >Delete</button>
                </div>
            </form>
        )
    }
}

export default ContactsForm;