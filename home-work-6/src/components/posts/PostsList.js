import React from 'react'
import PostsListItem from './PostListItem.js'
import './posts.css'

export default function PostsList({posts}) {
    return (
        <div className="posts-list">
            {posts.map((currentPost) => (
                <PostsListItem key={currentPost.id} post={currentPost} />
            ))}
        </div>
    )
}
