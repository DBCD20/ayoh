import React, { Component } from 'react';
import './Post.css'
class Post extends Component {

    render(){
        const {img, title, author, teaser} = this.props;

        return(
            <div className='container-fluid py-2'>
                <article className='bg-light container p-3 my-2'>
                    <img src={img} />
                    <h4 className='py-1 my-0'>{title}</h4>
                    <p className='p-0 author'><em>by {author}</em></p>
                    <p> {teaser} </p>
                </article>
            </div>
        )
    }
}

export default Post;