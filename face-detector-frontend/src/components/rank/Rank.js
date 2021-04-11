import React from 'react';
import Tilt from 'react-tilt';

const Rank = ({ userName, entries, userId }) => {

    const url = "https://robohash.org/" + userId;
    return(
        <div>

            <div className="ma4 mt0 center">
                <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner">
                        <img alt='logo' src={url}></img>
                    </div>
                    
                </Tilt>
                <h1 className="f1 ma4">{`${userName}`}</h1>

            </div>

            <div className="white f3">
                {`your current entires count is  ${entries}`}
            </div>
            
        </div>
    );
}

export default Rank;