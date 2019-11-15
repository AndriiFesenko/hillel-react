import React from 'react'
import { Link } from 'react-router-dom'

export default function PostListItem({post}) {

    function cutLongTitle(element) {
        let newEl = element.length > 25 ? element.slice(0,25) : element;
        newEl += '...'
        return newEl;
    }

    return (
        <div className="item">
            <Link to={`/posts/${post.id}`}>{cutLongTitle(post.title)}</Link>
        </div>
    )
}
