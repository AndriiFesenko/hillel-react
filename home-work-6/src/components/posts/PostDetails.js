import React from 'react'
import CommentsList from './comments/CommentsList'
import './postDetails.css'

export default function PostDetails({currentPost, comments}) {
    return (
        <div className="post-details">
            <div className="body">
                {currentPost.body}
            </div>
            <CommentsList comments={comments}/>
        </div>
    )
}
