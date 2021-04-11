import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boundingBox}) => {
    
    return (
            < div className = "center ma" >
                <div className="absolute mt2">
                <img id="inputImage" alt='' src={imageUrl} width='500px' height='auto'></img>
                {boundingBox.map((box, index) => {
                     return <div key={index}>
                               <div
                                className="bounding-box"
                                style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}>
                               </div>
                            </div>
                    })
                }
                </div>
           
        </div>    

    );
}

export default FaceRecognition;