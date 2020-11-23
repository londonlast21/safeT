import React from 'react';
//import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
    return (

        
        <div className="card mb-3">
            <div className="card-header">
                <span className="review-title">Reviews</span>
            </div>
            <br/>
            <div className="card-body">
                {comments &&
                comments.map(comment => (
                    <p className="pill mb-3" key={comment._id}>
                        <p className="comments-text">
                        Review by {comment.username} on {comment.createdAt}
                        </p>
                        {comment.commentBody}
                        
                    </p>
                ))}
            </div>
        </div>
            
    );
};

export default CommentList;