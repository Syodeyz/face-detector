import React from 'react';

const Rank = ({userName, entries}) => {
    return(
        <div>
            <div className="white f3">
                {`${userName} your current entires count is  ${entries}` }
            </div>
        </div>
    );
}

export default Rank;