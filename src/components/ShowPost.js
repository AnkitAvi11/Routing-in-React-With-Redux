import React from 'react';

const showPost = (props) => {
    return (
        <div className="card">
            <div className="card-header"><h3>{props.post.title}</h3></div>
            <div className="card-body">
                {props.post.body}
            </div>
            <div className="card-footer">
                By : {props.user.name}
            </div>
        </div>
    )
}

export default showPost;