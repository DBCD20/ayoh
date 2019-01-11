import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header className='bg-warning shadow' style={{}}>
                <div className='container-fluid'  style={{height: '100%'}}>
                    <div style={{maxWidth:'1200px', height: '100%', position: 'relative'}} className='mx-auto d-flex flex-column justify-content-center'>
                    <div className='col-md-5 align-self-start'>
                    <h2 className='text-white mb-0'>Back up</h2>
                        <h3 className='text-white px-0'>
                            Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
                        </h3>
                        <p className='text-white'>
                            Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins
                        </p>
                    </div>
                        <img src='./phone.png'  width='600px'/>
                    </div>
                </div>
                
            </header>
        )
    }
}
export default Header;