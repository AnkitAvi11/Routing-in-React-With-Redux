import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllPosts} from '../../actions/index';

import Loader from '../../components/Loader';
import PostCard from '../../components/PostCard';

class AllPosts extends Component {

    componentDidMount = () => {
        this.props.getPosts();
    }

    render() {

        if(this.props.posts == null) {
            return <Loader/>
        }else{            

            let posts = this.props.posts.map((post, index) => {
                return (
                    <React.Fragment key={index}>
                        <PostCard 
                            post={post}
                        />
                    </React.Fragment>
                )
            })
    
            return(
                <div className="container">
                    <h2>All Posts</h2>
                    {posts}
                </div>
            )

        }        
    }
}

const mapStateToProps = (state, ownprops) => {
    console.log(state);
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {
    getPosts : getAllPosts
})(AllPosts);
