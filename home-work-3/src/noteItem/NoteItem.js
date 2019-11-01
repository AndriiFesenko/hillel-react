import React, { Component } from 'react'
import './noteItem.css'
export class NoteItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: this.props.task.heading,
            body: this.props.task.body
        }
    }
    onSaveBttnClick = (e) => {
        this.props.onSave(e, this.state, this.props.task.id);
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onDeleteBttnClick = () => {
        this.props.onDelete(this.props.task);
    }
    render() {
        return (
            <li>
                <input type="button" value="delete" onClick={this.onDeleteBttnClick}/>
                <input 
                    type="text" 
                    name="heading" 
                    value={this.state.heading} 
                    onChange={this.onInputChange}
                />
                <textarea 
                    name="body" 
                    onChange={this.onInputChange}
                    value={this.state.body}
                />
                <input type="button" value="save" onClick={this.onSaveBttnClick}/>
            </li>
        )
    }
}

export default NoteItem
