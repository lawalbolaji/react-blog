import React from 'react';
import Navigation from './Navigation';
import LandingImage from './LandingImage';
import Feed from './Feed';
import Footer from './Footer';

function Home(props){
    return (
        <div>
            <Navigation />
            <LandingImage />
            <Feed />
            <Footer />
        </div>
    );
}

export default Home;