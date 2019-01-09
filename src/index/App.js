import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Header from './Header';
import Article from './Article';
import OtherPost from './OtherPost';
import Footer from './Footer.js';

class App extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <Login />
                <Header />
                <Article />
                <Footer />
            </div>
        )

    }
}
export default App;