import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Article from './Article';
import OtherPost from './OtherPost';
import Footer from './Footer.js';

class App extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <Article />
                <OtherPost />
                <Footer />
            </div>
        )

    }
}
export default App;