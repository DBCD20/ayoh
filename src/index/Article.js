import React, { Component } from 'react';
import './Article.css';
import Post from './Post';

class Article extends Component {


    render(){
       const Props =  [{
            img: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Coffeenated',
            author: 'Cream Decaffeinated',
            teaser: 'As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.'
        },{
            img: 'https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Medical Records',
            author: 'Cream Decaffeinated',
            teaser: 'As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.'
        },
        {
            img: 'https://images.pexels.com/photos/1587648/pexels-photo-1587648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Fat away!',
            author: 'Cream Decaffeinated',
            teaser: 'As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.'
        },
        {
            img: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Biologic Research',
            author: 'Cream Decaffeinated',
            teaser: 'As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.'
        }
        ];
        
        return(
            <div className='container-fluid'>
                <h3 className='p-3 text-center'>Blogs</h3>
                {Props.map((obj) => (<Post {...obj} />))}
            </div>
            
        )
    }
}

export default Article;