import React, { Component } from 'react';

class Social extends Component {
    render(){
        return(
            <div className='container'>
                    <h6 className='text-white p-2 m-0'>Find us online</h6>
                <ul className='container text-left p-0'>
                    <li className='social'><i class="fab fa-twitter"></i></li>
                    <li className='social'><i class="fab fa-facebook-square"></i></li>
                    <li className='social'><i class="fab fa-google-plus-g"></i></li>
                    <li className='social'><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
        )
    }
}

export default Social;