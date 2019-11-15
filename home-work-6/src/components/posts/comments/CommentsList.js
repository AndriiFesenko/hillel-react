import React from 'react'
import CommentsListItem from './CommentsListItem'

export default function CommentsList({comments}) {
    return (
        <div className="comments">
            {comments.map((currentComment) => (
                <CommentsListItem key={currentComment.id} comment={currentComment} />
            ))}
        </div>
    )
}
