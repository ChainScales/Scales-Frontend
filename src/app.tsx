import React from 'react'
import "./css/app.scss";
import AppHeader from './components/header';
import AppHero from './components/hero';

const App = () => {
    return(
        <div>
            <AppHeader />
            <AppHero />
        </div>
    )
}

export default App