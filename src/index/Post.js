import React, { Component } from 'react';
import './Post.css'
class Post extends Component {

    render(){
        const {img, title, author, teaser} = this.props;

        return(
                <article className='bg-light m-3 p-0'>
                    <div className='wrapImg'><img src={img} /></div>
                    <h4 className='p-2 my-0'>{title}</h4>
                    <p className='p-0 px-2 author'><em>by {author}</em></p>
                </article>
        )
    }
}

export default Post;