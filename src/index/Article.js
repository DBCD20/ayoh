import React, { Component } from 'react';
import './Article.css';
import Post from './Post';

class Article extends Component {
    render(){
        return(
            <div className='container-fluid'>
                <h3 className='p-3 text-center'>Blogs</h3>
                <Post />
            </div>
            
        )
    }
}

export default Article;