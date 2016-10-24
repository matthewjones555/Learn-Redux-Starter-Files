/**
 * Created by matthew.jones on 10/21/2016.
 */
import React from 'react';
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
    render() {
        const index = this.props.posts.findIndex(p => p.code === this.props.params.postId);
        const post = this.props.posts[index];

        return (
            <div className="single-photo">
                <Photo i={index} post={post} {...this.props} />
                <Comments/>
            </div>
        );
    }
}

export default Single;