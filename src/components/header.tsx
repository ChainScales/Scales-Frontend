import React from 'react';


const AppHeader = () => {

    return(
        <header className="app--header">
           <div className="logo--block">
             <div className="logo--section">
                <img src="img/logo.png" />
             </div>
             <div className="header--menu">
                <div className="menu--item">
                     Checsum
                </div>
             </div>  
           </div>
            <div className="wallet--section">
                <div className="lang--selector">
                    <div className="lang--item">
                        EN
                    </div>
                    <div className="lang--item">
                        RU
                    </div>
                </div>
                <div className="connect--wallet--btn">
                    Connect wallet
                </div>
            </div>
        </header>
    )
}

export default AppHeader