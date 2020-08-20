import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import Loader from '../../components/Loader';
import ShowPost from '../../components/ShowPost';

class Post extends Component {

    componentDidMount = () => {
        this.props.getPost(this.props.match.params.blog_id)
    }

    render () {

        if (this.props.selectedUser===null || this.props.selectedPost === null) {
            return <Loader/>
        }else{

            if(this.props.selectedPost.id!=this.props.match.params.blog_id || this.props.selectedPost.userId != this.props.selectedUser.id){
                return <Loader/>
            }else{
                return(
                    <div className="container">
                        <ShowPost 
                            post={this.props.selectedPost}
                            user={this.props.selectedUser}
                        />
                    </div>
                )
            }

        }        
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        selectedPost : state.selectedPost,
        selectedUser : state.selectedUser
    }
}

export default connect(mapStateToProps, {
    getPost : actions.getPostAndUser
})(Post);