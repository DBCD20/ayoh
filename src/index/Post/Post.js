import React, { Component } from 'react';
import './Post.css'
class Post extends Component {

    render(){
        const {img, title, author, teaser} = this.props;

        return(
                <article className='container shadow-sm post m-3 p-0' style={{background: 'white', color: '#235180'}}>
                    <div className='wrapImg'><img src={img} /></div>
                    <h4 className='p-4 my-0'>{title}</h4>
                    <p className='p-0 px-4 author'><em>by {author}</em></p>
                </article>
        )
    }
}

export default Post;