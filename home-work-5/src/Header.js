import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <span>Admin App</span>
            <ul className="nav-menu">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                <li><NavLink to="/albums" activeClassName="active">Albums</NavLink></li>
            </ul>
        </header>
    )
}
