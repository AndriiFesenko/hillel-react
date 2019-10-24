import React, { Component } from 'react'
import NoteItem from '../noteItem/NoteItem'
import './noteList.css'
export class NoteList extends Component {
    render() {
        return (
            <ul className="note-wrapper">
                {this.props.tasks.map( task => (
                    <NoteItem 
                        key={task.id}
                        task={task} 
                        onSave={this.props.onSave}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
        )
    }
}

export default NoteList
