import React from 'react';
import Warning from './warning';

const HashCalcSection = () => {

    return(
        <div className="section hash--calculator">
             <div className="hash--calc--inner">
                <div className="section--heading hero--heading">
                    <h2>CALCULATE CHECKSUM ONLINE</h2>
                </div>
                <Warning heading='PRIVACY SECURE WARNING' text='We are strongly recommend to calculate your file’s hash locally and past your ready checksum, online calculation is unsecure for traffic interception' />
                <div className="calculation--form">
                    <input type="file" />
                    <div className="hash--byns--section">
                        <button>md5</button>
                        <button>sha1</button>
                        <button>sha256</button>
                        <button>Keccak</button>
                    </div>
                </div>
             </div>
        </div>
    )
}