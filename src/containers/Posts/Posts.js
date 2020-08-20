import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AllPosts from './AllPosts';
import Post from './Post';

class Posts extends React.Component {
    
    render() {
        console.log("Url = ",this.props.match.url)
        return (
            <div>
                <Switch>
                <Route path={`${this.props.match.url}`} component={AllPosts} exact />
                <Route path='/posts/:blog_id' component={Post} />
                </Switch>
            </div>
        )
    }
}

export default Posts;