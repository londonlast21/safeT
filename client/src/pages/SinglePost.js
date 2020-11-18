import React from 'react';


const SinglePost = props => {
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          posted on createdAt
        </p>
        <div className="card-body">
          <p>Post body</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;