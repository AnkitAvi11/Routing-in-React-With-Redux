import React from 'react';

import {Link} from 'react-router-dom';

const postCard = (props) => {
    return (
        <div className="card" style={{marginBottom:"10px"}}>
            <div className="card-header">
                <Link to={`/posts/${props.post.id}`}>
                    {props.post.title}
                </Link>
            </div>
            <div className="card-body">
                {props.post.body}
            </div>
            <div className="card-header">
                User Id : {props.post.userId}
            </div>
        </div>
    )
}

export default postCard;