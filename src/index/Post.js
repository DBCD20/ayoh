import React, { Component } from 'react';
import './Post.css'
class Post extends Component {
    render(){
        return(
            <div className='container-fluid py-2'>
                <article className='bg-light container p-3 my-2'>
                    <img src='https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    <h4 className='py-1 my-0'>Coffeenated</h4>
                    <p className='p-0 author'><em>by cream decaffeinated</em></p>
                    <p>
                        As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                    </p>
                </article>
                <article className='bg-light container p-3 my-2'>
                    <img src='https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    <h4 className='py-1 my-0'>Medical Records</h4>
                    <p className='p-0 author'><em>by cream decaffeinated</em></p>
                    <p>
                        As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                    </p>
                </article>
                <article className='bg-light container p-3 my-2'>
                    <img src='https://images.pexels.com/photos/1587648/pexels-photo-1587648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <h4 className='py-1 my-0'>Fat away!</h4>
                    <p className='p-0 author'><em>by cream decaffeinated</em></p>
                    <p>
                        As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                    </p>
                </article>
            </div>
        )
    }
}

export default Post;