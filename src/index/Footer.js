import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className='container-fluid d-flex align-items-center p-4' style={{borderTop: '10px solid #60CAAD', background: 'linear-gradient(to right, #6441A5 0%, #2a0845 100%)', flexFlow: 'row wrap'}}>
                <ul className='mt-2 text-white' style={{listStyle: 'none', flex: '50%% 1', fontWeight: '100,'}}>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                    <li>Vision</li>
                    <li>Letter box</li>
                </ul>
                <p className='text-white p-4' style={{flex: '50% 1 2'}}>
                    As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                </p>
                <p className='text-white text-center pt-4' style={{flex: '100% 1 2', fontSize: '0.8rem'}}>
                    &copy; 2018 As decaffeinated, galão crema brewed eu trifecta aftertaste to go. So pumpkin spice latte café au lait cream plunger pot aromatic.
                </p>
            </footer>
        )
    }
}
export default Footer;