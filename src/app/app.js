import React, {useState} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from '../components/navigation/navigation';
import LandingImage from '../components/landingImage/landingImage';
import Feed from '../components/feed/feed';
import Footer from '../components/footer/Footer';
import Detail from '../components/detail/detail';

import Login from '../authentication/login';
import Register from '../authentication/register';


function App(props){

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <Navigation userLoggedIn={userLoggedIn}/>
                <Switch>
                <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <LandingImage />
                        <Feed />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;