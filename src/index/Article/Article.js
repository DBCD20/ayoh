import React, { Component } from 'react';
import './Article.css';
import Post from '../Post/Post';
import OtherPost from '../OtherPost/OtherPost.js';

const Props =  [{
    img: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'So pumpkin spice latte café au lait cream plunger pot aromatic',
    author: 'Cream Decaffeinated'
},{
    img: 'https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'As decaffeinated, galão crema brewed eu trifecta aftertaste to go',
    author: 'Cream Decaffeinated'
},
{
    img: 'https://images.pexels.com/photos/1587648/pexels-photo-1587648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Fat away!',
    author: 'Cream Decaffeinated'
},
{
    img: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Crema brewed eu trifecta aftertaste to go',
    author: 'Cream Decaffeinated'
},
{
    img: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Crema brewed eu trifecta aftertaste to go',
    author: 'Cream Decaffeinated'
}
];
class Article extends Component {


    render(){       
        return(
            <div className='row p-0 m-0 mx-auto' style={{maxWidth: '1400px'}}>
            <div className='col-lg-8 py-4'>
                <div className='container d-flex flex-md-row flex-wrap justify-content-md-center justify-content-lg-start p-4'>
                    {Props.map((obj) => (<Post {...obj} />))}
                </div>
            </div>
            <div className='col-lg-4'>
                <OtherPost />
            </div>
            </div>
        )
    }
}

export default Article;