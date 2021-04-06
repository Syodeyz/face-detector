import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boundingBox}) => {
    
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" alt='' src={imageUrl} width='500px' height='auto'></img>
                <div className="bounding-box" style={{top: boundingBox.top, right:boundingBox.right, bottom: boundingBox.bottom, left:boundingBox.left}}>
                </div>    
            </div>
        </div>
    );
}

export default FaceRecognition;