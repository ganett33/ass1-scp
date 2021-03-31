
import React, { Component } from "react";

import Nav from './Components/Nav';
import Home from './Components/Home';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends Component
{
    render()
    {
        return(
            <div>
                <Nav />
                <Home />
                <Content/>
                <Footer />
            </div>
        );
    }
}

export default App;
