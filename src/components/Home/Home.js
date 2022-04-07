import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import More from '../More/More';
import About from '../About/About';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Reviews></Reviews>
            {/* <Contact></Contact> */}
            {/* <More></More> */}
            
        </div>
    );
};

export default Home;