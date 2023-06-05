import React from 'react';
import { warningEntry } from '../types';


const Warning = ( msg : warningEntry ) => {

    return(
        <div className="warning--message">
            <div className="warning--message--inner">
                 <div>icon</div>
                 <div className="warning--text">
                    <div className="warning--heading">
                        <h5>{msg.heading}</h5>
                    </div>
                    <div className="warning--desc">
                        {msg.text}
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Warning