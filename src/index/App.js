import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Header from './Header/Header';
import Article from './Article/Article';
import OtherPost from './OtherPost/OtherPost';
import Footer from './Footer/Footer.js';

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