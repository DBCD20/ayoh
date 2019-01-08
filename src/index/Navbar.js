import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light shadow' >
                <h1 className='navbar-brand text-dark'>Hello</h1>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item p-2 text-dark'>Home</li>
                        <li className='nav-item p-2 text-dark'>About Us</li>
                        <li className='nav-item p-2 text-dark'>Contact Us</li>
                        <li className='nav-item p-2 text-dark'>Free List</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;