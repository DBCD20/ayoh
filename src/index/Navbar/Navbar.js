import React, { Component } from 'react';
import './Navbar.css';
import Login from '../Login/Login';
class Navbar extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-md navbar-light shadow-lg' >
                <h1 className='navbar-brand'><i className="fas fa-band-aid text-warning"></i> Hello</h1>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse py-3' id='navbarNav'>
                    <ul className='navbar-nav mr-auto pb-2'>
                        <li className='nav-item mx-2 p-1 text-dark'>Home</li>
                        <li className='nav-item mx-2 p-1 text-dark'>About Us</li>
                        <li className='nav-item mx-2 p-1 text-dark'>Contact Us</li>
                        <li className='nav-item mx-2 p-1 text-dark'>Free List</li>
                        
                    </ul>
                    <button className='btn btn-primary nav-item p-2 text-white'data-toggle="modal" data-target="#exampleModal"><b>Log in</b></button>
                </div>
                
            </nav>
        )
    }
}
export default Navbar;