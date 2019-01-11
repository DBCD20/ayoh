import React, { Component } from 'react';
import './Footer.css';
import Social from '../Social/Social';

class Footer extends Component {
    render(){
        return(
            <footer className='container-fluid p-4' style={{background: '#06559e', flexFlow: 'row wrap'}}>
                <div className='container d-md-flex flex-md-row align-items-center justify-content-between' style={{maxWidth: '1700px'}}>
                <div className='footerWrap col-md-3' style={{order: '3'}}>
                <ul className='mt-2 text-white' style={{listStyle: 'none', flex: '47% 1', fontWeight: '100,'}}>
                    <li className='p-2 text-center'>Home</li>
                    <li className='p-2 text-center'>Contact Us</li>
                    <li className='p-2 text-center'>Services</li>
                    <li className='p-2 text-center'>Vision</li>
                    <li className='p-2 text-center'>Letter box</li>
                </ul>
                </div>
                <div className='col-lg-5 p-4'>
                <p className='container text-white' style={{flex: '47% 1',fontSize: '0.8em', order: '1'}}>
                    As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                </p>
                <div className="container">
                    <label for='' className='text-light'>Subscribe to our weekly newsletter</label>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="JanDoe@gmail.com" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Submit</button>
                        </form>
                </div>
                <Social />
                </div>
                </div>
                <div className='container-fluid'>
                     <p className='text-white text-center' style={{flex: '100% 1 1', fontSize: '1rem'}}>
                        &copy; 2018 As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                     </p>
                </div>
            </footer>
        )
    }
}
export default Footer;