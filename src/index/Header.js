import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header className='bg-warning' style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url("https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center', backgroundSize: 'cover', height: '300px', width: '100%'}}>
                <div className='container-fluid mx-auto d-flex flex-column justify-content-end' style={{height: '100%'}}>
                    <h2 className='text-white mb-0'>Back up</h2>
                    <p className=' container-fluid text-white px-0'>
                        Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins
                    </p>
                </div>
            </header>
        )
    }
}
export default Header;