import React from 'react'
import {NavLink, Link, useRouteMatch} from 'react-router-dom'

export default function AlbumListItem(props) {
    const {url} = useRouteMatch();
    function onAlbumClick(id) {
        props.saveId(id)
    }
    return (
        <li>
            <NavLink to={url} onClick={onAlbumClick.bind(null,props.album.id)}>{props.album.title}</NavLink>
        </li>
    )
}
