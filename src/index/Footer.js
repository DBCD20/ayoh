import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className='container-fluid ' style={{background: '#06559e', flexFlow: 'row wrap'}}>
                <div className='row' style={{maxWidth: '1200px'}}>
                <div className='footerWrap col-md-4'>
                <ul className='mt-2 text-white' style={{listStyle: 'none', flex: '47% 1', fontWeight: '100,'}}>
                    <li className='p-2 text-center'>Home</li>
                    <li className='p-2 text-center'>Contact Us</li>
                    <li className='p-2 text-center'>Services</li>
                    <li className='p-2 text-center'>Vision</li>
                    <li className='p-2 text-center'>Letter box</li>
                </ul>
                </div>
                <div className='container col-md-4 p-4'>
                <p className='text-white' style={{flex: '47% 1'}}>
                    As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                </p>
                <div >
                    <input className='form-control'  type='text' />
                </div>
                <h6 className='text-white'>Find us online</h6>
                <ul>
                    <li className='social'><i class="fab fa-twitter"></i></li>
                    <li className='social'><i class="fab fa-facebook-square"></i></li>
                    <li className='social'><i class="fab fa-google-plus-g"></i></li>
                    <li className='social'><i class="fab fa-instagram"></i></li>
                </ul>
                </div>
                <div className='footerWrap col-md-4'>
                <p className='text-white text-center pt-4' style={{flex: '100% 1 2', fontSize: '0.8rem'}}>
                    &copy; 2018 As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                </p>
                </div>
                </div>
            </footer>
        )
    }
}
export default Footer;